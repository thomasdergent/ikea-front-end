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
  stores: Store[];
  product: Product;
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

  loadCategories() {
    this.categories.push("Zetels", "Bureaus", "Stoelen", "Bedden", "Fauteuils", "Kasten", "Mediameubels");
    this.categories.sort();
  }

  submitAnnulation() {
    this.router.navigate(['/admin/overview/products']);
  }

  submitDetails() {
    this.updateProduct = this.product;
    this.ikeaservice.updateProduct(this.updateProduct.articleNumber, this.updateProduct).subscribe();
    this.router.navigate(['/admin/overview/products']);
  }
}
