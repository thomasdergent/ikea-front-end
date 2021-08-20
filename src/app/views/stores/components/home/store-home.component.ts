import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product/product.model';
import { Store } from 'src/app/models/store/store.model';
import { IkeaService } from 'src/app/services/ikea-service/ikea-service.service';

@Component({
  templateUrl: './store-home.component.html',
  styleUrls: ['./store-home.component.scss']
})
export class StoreHomeComponent implements OnInit {

  test: Store;
  stores: Store[];
  categoryProducts: Product[];
  storeForm: FormGroup;

  constructor(
    private router: Router,
    private ikeaservice: IkeaService,
  ) {
  }

  ngOnInit(): void {
    this.ikeaservice.getStores().subscribe(
      result => {
        this.stores = result;
        console.log(result);
      }
    )
  }

  submitStore(event: any) {
    this.router.navigate(['/store/' + event.value + '/products']);
  }
}
