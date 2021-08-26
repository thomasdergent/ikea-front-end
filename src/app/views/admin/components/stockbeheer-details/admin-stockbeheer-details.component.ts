import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product/product.model';
import { Store } from 'src/app/models/store/store.model';
import { IkeaService } from 'src/app/services/ikea-service/ikea-service.service';

@Component({
  selector: 'app-containers-details',
  templateUrl: './admin-stockbeheer-details.component.html',
  styleUrls: ['./admin-stockbeheer-details.component.scss']
})
export class AdminStockbeheerDetailsComponent implements OnInit {

  store: Store;
  product: Product;

  constructor(
    public dialogRef: MatDialogRef<AdminStockbeheerDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ikeaservice: IkeaService,
    private router: Router,
    private route: ActivatedRoute,

  ) {
    this.loadProduct();
    this.loadStore();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  loadProduct() {
    this.route.data.subscribe(data => {
      this.ikeaservice.getProductByArticleNumber(this.data.articleNumber).subscribe(
        result => {
          this.product = result;

          if (result) {
          }
        }
      )
    });
  }

  loadStore() {
    this.route.data.subscribe(data => {
      this.ikeaservice.getStoreByArticleNumberAndStoreName(this.data.articleNumber, this.data.storeName).subscribe(
        result => {
          this.store = result;
        }
      )
    });
  }

  addStore() {
    this.route.data.subscribe(data => {
      this.ikeaservice.updateStore(this.product.articleNumber, this.data.storeName, this.store).subscribe();
      this.dialogRef.close();
    });
  }

  ngOnInit(): void {
  }
}
