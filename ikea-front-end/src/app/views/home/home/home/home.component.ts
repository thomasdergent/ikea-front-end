import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product.model';
import { Store } from 'src/app/models/store/store.model';
import { IkeaService } from 'src/app/services/ikea-service/ikea-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  test: Store;
  stores: Store[];
  categoryProducts: Product[];

  constructor(
    private ikeaservice: IkeaService,
  ) {

    this.getStores();
    this.getTest1();
  }

  ngOnInit(): void {
  }

  getStores() {
    this.ikeaservice.getStores().subscribe(
      result => {
        this.stores = result;
        console.log(result);
      }
    )
  }

    getTest1() {
    this.ikeaservice.getProductsByStoreNameAndCategory("IKEA Wilrijk", "Boeken").subscribe(
      result => {
        this.test = result;
        console.log(result);
      }
    )
  }
}
