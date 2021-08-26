import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product/product.model';
import { Store } from 'src/app/models/store/store.model';
import { IkeaService } from 'src/app/services/ikea-service/ikea-service.service';

@Component({
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  test: Store;
  stores: Store[];
  categoryProducts: Product[];
  storeForm: FormGroup;
  spinner: Boolean = true;

  constructor(
    private router: Router,
    private ikeaservice: IkeaService,
  ) {
  }

  ngOnInit(): void {
  }

  submitStore(event: any) {
    this.router.navigate(['/admin/overview/products/store/' + event.value]);
  }
}
