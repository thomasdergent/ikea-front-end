import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IkeaService } from 'src/app/services/ikea-service/ikea-service.service';

@Component({
  selector: 'app-containers-input',
  templateUrl: './admin-delete.component.html',
  styleUrls: ['./admin-delete.component.scss']
})
export class AdminDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdminDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ikeaservice: IkeaService,
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteProduct() {
    this.ikeaservice.deleteProduct(this.data.storeName, this.data.articleNumber).subscribe();
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
