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

  store: Store;
  categoryProduct : Product[];
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
    const storeName = this.route.snapshot.paramMap.get('storeName');
    const articleNumber = this.route.snapshot.paramMap.get('articleNumber');
    this.ikeaservice.getProductByStoreNameAndArticleNumber(storeName, articleNumber).subscribe(
      result => {
        this.store = result;
        this.categoryProduct = result.categoryProducts;

        if (result){
          this.spinner = false;
        }
      }
    )
  }
}
