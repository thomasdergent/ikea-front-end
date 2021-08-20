import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product/product.model';
import { Store } from 'src/app/models/store/store.model';
import { IkeaService } from 'src/app/services/ikea-service/ikea-service.service';

@Component({
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.scss']
})
export class AdminDetailsComponent implements OnInit {
  store: Store;
  categoryProducts: Product[];
  spinner: Boolean = true;
  categories: any;
  selectedCategory = 'domain';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ikeaservice: IkeaService,
  ) { }

  ngOnInit(): void {
 this.loadArticle();
  }

  loadArticle() {
    const storeName = this.route.snapshot.paramMap.get('storeName');
    const articleNumber = this.route.snapshot.paramMap.get('articleNumber');

    console.log(storeName)
    console.log(articleNumber)
    this.ikeaservice.getProductByStoreNameAndArticleNumber(storeName, articleNumber).subscribe(
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
}
