import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/product/product.model';
import { Store } from 'src/app/models/store/store.model';
import { IkeaService } from 'src/app/services/ikea-service/ikea-service.service';

@Component({
  selector: 'app-containers-input',
  templateUrl: './admin-delete.component.html',
  styleUrls: ['./admin-delete.component.scss']
})
export class AdminDeleteComponent implements OnInit {

  product: Product;
  stores: Store[];

  constructor(
    public dialogRef: MatDialogRef<AdminDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ikeaservice: IkeaService,
  ) {
    this.loadProduct();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  loadProduct() {
    this.ikeaservice.getProductByArticleNumber(this.data.articleNumber).subscribe(
      result => {
        this.product = result;
        this.stores = result.storeStocks;
        if (result) {
        }
      }
    )
  }

  deleteProduct() {

    this.stores.forEach(store => {
      this.ikeaservice.deleteStore(this.product.articleNumber, store.storeName).subscribe();
    });

    this.ikeaservice.deleteProduct(this.data.articleNumber).subscribe();
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
