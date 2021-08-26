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
  templateUrl: './store-overview-category.component.html',
  styleUrls: ['./store-overview-category.component.scss']
})
export class StoreOverviewCategoryComponent implements OnInit {

  store: Store;
  products: Product[];
  spinner: Boolean = true;
  categories: any;
  selectedCategory = 'domain';
  category: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ikeaservice: IkeaService,
  ) {
  }

  ngOnInit(): void {
    this.loadProducts();
  }


  loadProducts() {
    this.route.params.subscribe(params => {
      this.category = this.route.snapshot.paramMap.get('category');

      this.ikeaservice.getProductsByCategory(this.category).subscribe(
        result => {
          this.products = result;

          if (result) {
            this.spinner = false;
          }
        }
      )
    });
  }
}
