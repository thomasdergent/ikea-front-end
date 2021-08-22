import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product/product.model';
import { Store } from 'src/app/models/store/store.model';
import { IkeaService } from 'src/app/services/ikea-service/ikea-service.service';

@Component({
  templateUrl: './admin-input.component.html',
  styleUrls: ['./admin-input.component.scss']
})
export class AdminInputComponent implements OnInit {
  store: string;
  stores: Store[];
  addProduct: Product = new Product("", "", "", "", false, "", "", "", 0, 0, "", "");
  spinner: Boolean = true;
  categories: string[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ikeaservice: IkeaService,
  ) { }

  ngOnInit(): void {
    this.loadCategories();
    this.loadStores();
    this.getStore();
  }

  getStore() {
    const storeName = this.route.snapshot.paramMap.get('storeName');

    this.store = storeName;
  }

  loadStores() {
    this.ikeaservice.getStores().subscribe(
      result => {
        this.stores = result;
        this.spinner = false;
      }
    )
  }

  loadCategories() {
    this.categories.push("Zetels", "Bureaus", "Stoelen", "Bedden", "Fauteuils", "Kasten", "Mediameubels");
    this.categories.sort();
  }

  submitAnnulation() {
    this.router.navigate(['/admin/overview/products/store/' + this.store]);
  }

  submitDetails() {
    this.addProduct.storeName = this.store;
    this.ikeaservice.addProduct(this.addProduct).subscribe();
    this.router.navigate(['/admin/overview/products/store/' + this.store]);
  }
}
