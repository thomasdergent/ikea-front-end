import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product/product.model';
import { Store } from 'src/app/models/store/store.model';
import { IkeaService } from 'src/app/services/ikea-service/ikea-service.service';

@Component({
  templateUrl: './store-overview.component.html',
  styleUrls: ['./store-overview.component.scss']
})
export class StoreOverviewComponent implements OnInit {

  store: Store;
  categoryProducts: Product[];
  spinner: Boolean = true;
  categories: any;
  selectedCategory = 'domain';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ikeaservice: IkeaService,
  ) {
    this.loadProducts();
  }

  ngOnInit(): void {
  }

  loadProducts() {
    this.route.params.subscribe(params => {

      const storeName = params['storeName'];
      this.ikeaservice.getProductsByStoreName(storeName).subscribe(
        result => {
          this.store = result;
          this.categoryProducts = result.categoryProducts;

          this.categories = this.categoryProducts.map(item => item.category)
            .filter((value, index, self) => self.indexOf(value) === index)

          if (result) {
            this.spinner = false;
          }
        }
      )
    });
  }

  submitCategory(event: any) {
    this.spinner = true;

    if (event.value == this.store.storeName) {
      this.ikeaservice.getProductsByStoreName(event.value).subscribe(
        result => {
          this.store = result;
          this.categoryProducts = result.categoryProducts;

          if (result) {
            this.spinner = false;
          }
        }
      )
    } else {
      this.ikeaservice.getProductsByStoreNameAndCategory(this.store.storeName, event.value).subscribe(
        result => {
          this.store = result;
          this.categoryProducts = result.categoryProducts;

          if (result) {
            this.spinner = false;
          }
        }
      )
    }
  }
}
