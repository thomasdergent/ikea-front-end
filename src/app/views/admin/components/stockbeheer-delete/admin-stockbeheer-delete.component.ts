import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product/product.model';
import { Store } from 'src/app/models/store/store.model';
import { IkeaService } from 'src/app/services/ikea-service/ikea-service.service';

@Component({
  selector: 'app-containers-input',
  templateUrl: './admin-stockbeheer-delete.component.html',
  styleUrls: ['./admin-stockbeheer-delete.component.scss']
})
export class AdminStockbeheerDeleteComponent implements OnInit {

  store: Store;
  product: Product;

  constructor(
    public dialogRef: MatDialogRef<AdminStockbeheerDeleteComponent>,
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
    this.route.data.subscribe(params => {
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
    this.route.data.subscribe(params => {
      this.ikeaservice.getStoreByArticleNumberAndStoreName(this.data.articleNumber, this.data.storeName).subscribe(
        result => {
          this.store = result;
        }
      )
    });
  }

  deleteStore() {
    this.ikeaservice.deleteStore(this.store.articleNumber, this.store.storeName).subscribe();
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
