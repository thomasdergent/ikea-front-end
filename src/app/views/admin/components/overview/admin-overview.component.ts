import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product/product.model';
import { Store } from 'src/app/models/store/store.model';
import { IkeaService } from 'src/app/services/ikea-service/ikea-service.service';

@Component({
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.scss']
})
export class AdminOverviewComponent implements OnInit {

  store: Store;
  categoryProducts: Product[];
  spinner: Boolean = true;
  categories: any;
  selectedCategory = 'domain';

  dataSource = new MatTableDataSource<Product>([]);
  displayedColumns: string[] = ['name', 'articleNumber', 'category', 'price', 'stock', 'acties'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ikeaservice: IkeaService,
  ) { 
    this.loadArticle();
  }

  ngOnInit(): void {
  }

  loadArticle() {
    this.route.params.subscribe(params => {

    const storeName = params['storeName'];
    this.ikeaservice.getProductsByStoreName(storeName).subscribe(
      result => {
        this.store = result;
        this.categoryProducts = result.categoryProducts;
        console.log(result);
        console.log(result.categoryProducts);

        this.dataSource = new MatTableDataSource<Product>(result.categoryProducts);
        console.log(this.dataSource);

        this.categories = this.categoryProducts.map(item => item.category)
          .filter((value, index, self) => self.indexOf(value) === index)

        console.log(this.categories);

        if (result) {
          this.spinner = false;
        }

        let array = [
          { "name": "Joe", "age": 17 },
          { "name": "Bob", "age": 17 },
          { "name": "Carl", "age": 35 }
        ];
        let arraytest = array.map(item => item.age)
          .filter((value, index, self) => self.indexOf(value) === index)

        console.log(arraytest);
      }
    )
  });
  }
}
