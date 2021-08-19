import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product/product.model';
import { Store } from 'src/app/models/store/store.model';
import { IkeaService } from 'src/app/services/ikea-service/ikea-service.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  store: Store;
  categoryProducts: Product[];
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
        this.categoryProducts = result.categoryProducts;

        if (result){
          this.spinner = false;
        }
      }
    )
  }
}
