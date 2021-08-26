import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product/product.model';
import { Store } from 'src/app/models/store/store.model';
import { IkeaService } from 'src/app/services/ikea-service/ikea-service.service';

@Component({
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss']
})
export class StoreDetailsComponent implements OnInit {

  stores: Store[];
  product: Product;
  spinner: Boolean = true;

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
      const articleNumber = this.route.snapshot.paramMap.get('articleNumber');
      this.ikeaservice.getProductByArticleNumber(articleNumber).subscribe(
        result => {
          this.product = result;
          this.stores = result.storeStocks;

          if (result) {
            this.spinner = false;
          }
        }
      )
    });
  }
}
