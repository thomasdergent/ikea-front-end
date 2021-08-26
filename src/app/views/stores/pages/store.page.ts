import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MSAL_GUARD_CONFIG, MsalGuardConfiguration, MsalService, MsalBroadcastService } from '@azure/msal-angular';
import { AuthenticationResult, InteractionStatus, InteractionType, PopupRequest, RedirectRequest } from '@azure/msal-browser';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { Product } from 'src/app/models/product/product.model';
import { Store } from 'src/app/models/store/store.model';
import { IkeaService } from 'src/app/services/ikea-service/ikea-service.service';

type ProfileType = {
  givenName?: string,
  surname?: string,
  userPrincipalName?: string,
  id?: string,
  jobTitle?: string
};


@Component({
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss']
})
export class StorePageComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isIframe = false;
  loginDisplay = false;
  private readonly destroying$ = new Subject<void>();
  profile!: ProfileType;
  private destroyed$: Subject<boolean> = new Subject<boolean>();
  public profilePicture: SafeUrl = '';

  products: Product[];
  categories: any;
  spinner: Boolean = true;

  constructor(
    private router: Router,
    private ikeaservice: IkeaService,
    private observer: BreakpointObserver,

    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
  ) { }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  ngOnInit(): void {
    this.loadProducts();

    this.isIframe = window !== window.parent && !window.opener; // Remove this line to use Angular Universal
    this.setLoginDisplay();

    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => {
        this.setLoginDisplay();
        this.checkAndSetActiveAccount();
      })
  }

  loadProducts() {

    this.ikeaservice.getProducts().subscribe(
      result => {
        this.products = result;

        this.categories = this.products.map(item => item.category)
          .filter((value, index, self) => self.indexOf(value) === index);

        if (result) {
          this.spinner = false;
        }
      }
    )
  }

  submitCategory(category) {
    this.router.navigate(['/store/products/' + category]);
  }


  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

  checkAndSetActiveAccount(): void {
    const activeAccount = this.authService.instance.getActiveAccount();

    if (!activeAccount && this.authService.instance.getAllAccounts().length > 0) {
      const accounts = this.authService.instance.getAllAccounts();
      this.authService.instance.setActiveAccount(accounts[0]);
    }
  }

  login(): void {
    if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
      if (this.msalGuardConfig.authRequest) {
        this.authService.loginPopup({ ...this.msalGuardConfig.authRequest } as PopupRequest)
          .subscribe((response: AuthenticationResult) => {
            this.authService.instance.setActiveAccount(response.account);
          });
      } else {
        this.authService.loginPopup()
          .subscribe((response: AuthenticationResult) => {
            this.authService.instance.setActiveAccount(response.account);
          });
      }
    } else {
      if (this.msalGuardConfig.authRequest) {
        this.authService.loginRedirect({ ...this.msalGuardConfig.authRequest } as RedirectRequest);
      } else {
        this.authService.loginRedirect();
      }
    }
  }

  logout(): void {
    if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
      this.authService.logoutPopup({
        mainWindowRedirectUri: 'home'
      });
    } else {
      this.authService.logoutRedirect();
    }
  }

  isLoggedIn(): boolean {
    return this.authService.instance.getActiveAccount() != null;
  }
}
