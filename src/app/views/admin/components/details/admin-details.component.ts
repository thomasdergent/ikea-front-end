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
  categoryProduct: Product[];
  updateProduct: Product;
  spinner: Boolean = true;
  categories: string[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ikeaservice: IkeaService,
  ) { }

  ngOnInit(): void {
    this.loadCategories();
    this.loadProduct();

  }

  loadProduct() {
    const storeName = this.route.snapshot.paramMap.get('storeName');
    const articleNumber = this.route.snapshot.paramMap.get('articleNumber');

    this.ikeaservice.getProductByStoreNameAndArticleNumber(storeName, articleNumber).subscribe(
      result => {
        this.store = result;
        this.categoryProduct = result.categoryProducts;
        console.log(result);
        console.log(result.categoryProducts);
        console.log(this.categories);

        if (result) {
          this.spinner = false;
        }
      }
    )
  }

  loadCategories() {
    this.categories.push("Zetels", "Bureaus", "Stoelen", "Bedden", "Fauteuils", "Kasten", "Mediameubels");
    this.categories.sort();
  }

  submitAnnulation() {
    this.updateProduct = this.categoryProduct[0];
    this.updateProduct.storeName = this.store.storeName;
    this.router.navigate(['/admin/overview/products/store/' + this.updateProduct.storeName]);
  }

  submitDetails() {
    this.updateProduct = this.categoryProduct[0];
    this.updateProduct.storeName = this.store.storeName;
    this.ikeaservice.updateProduct(this.updateProduct.storeName, this.updateProduct.articleNumber, this.updateProduct).subscribe();
    this.router.navigate(['/admin/overview/products/store/' + this.updateProduct.storeName]);
  }
}
