import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product/product.model';
import { Store } from 'src/app/models/store/store.model';
import { IkeaService } from 'src/app/services/ikea-service/ikea-service.service';

@Component({
  selector: 'app-containers-input',
  templateUrl: './admin-stockbeheer-input.component.html',
  styleUrls: ['./admin-stockbeheer-input.component.scss']
})
export class AdminStockbeheerInputComponent implements OnInit {

  store: Store = new Store("", "", 0);
  product: Product;

  constructor(
    public dialogRef: MatDialogRef<AdminStockbeheerInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ikeaservice: IkeaService,
    private router: Router,
    private route: ActivatedRoute,

  ) {
    this.loadProduct();
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

  addStore() {
    this.store.articleNumber = this.product.articleNumber;
    this.ikeaservice.addStore(this.store).subscribe();
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
