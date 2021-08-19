import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product/product.model';
import { Store } from 'src/app/models/store/store.model';
import { IkeaService } from 'src/app/services/ikea-service/ikea-service.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

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
    this.loadArticle();
  }

  ngOnInit(): void {
  }


  loadArticle() {
    const storeName = this.route.snapshot.paramMap.get('storeName');
    this.ikeaservice.getProductsByStoreName(storeName).subscribe(
      result => {
        this.store = result;
        this.categoryProducts = result.categoryProducts;
        console.log(result);
        console.log(result.categoryProducts);

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
  }

  submit(event: any) {
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
