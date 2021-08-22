import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product/product.model';
import { Store } from 'src/app/models/store/store.model';
import { IkeaService } from 'src/app/services/ikea-service/ikea-service.service';
import { AdminDeleteComponent } from '../delete/admin-delete.component';

@Component({
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.scss']
})
export class AdminOverviewComponent implements OnInit {

  store: Store;
  categoryProducts: Product[];
  spinner: Boolean = true;
  categories: any;
  selectedCategory = 'domain';

  dataSource = new MatTableDataSource<Product>([]);
  displayedColumns: string[] = ['name', 'articleNumber', 'category', 'price', 'stock', 'acties'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ikeaservice: IkeaService,
    public dialog: MatDialog,
  ) {
    this.loadProducts();
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  loadProducts() {
    this.route.params.subscribe(params => {

      const storeName = params['storeName'];
      this.ikeaservice.getProductsByStoreName(storeName).subscribe(
        result => {
          this.store = result;
          this.categoryProducts = result.categoryProducts;

          this.categories = this.categoryProducts.map(item => item.category)
            .filter((value, index, self) => self.indexOf(value) === index)

          if (result) {
            this.dataSource = new MatTableDataSource<Product>(result.categoryProducts);
            this.spinner = false;
          }
        }
      )
    });
  }

  submitCategory(event: any) {
    this.spinner = true;

    if (event.value == this.store.storeName) {
      this.ikeaservice.getProductsByStoreName(event.value).subscribe(
        result => {
          this.store = result;
          this.categoryProducts = result.categoryProducts;
          this.dataSource = new MatTableDataSource<Product>(result.categoryProducts);
          if (result) {
            this.spinner = false;
          }
        }
      )
    } else {
      this.ikeaservice.getProductsByStoreNameAndCategory(this.store.storeName, event.value).subscribe(
        result => {
          this.store = result;
          this.categoryProducts = result.categoryProducts;
          this.dataSource = new MatTableDataSource<Product>(result.categoryProducts);
          if (result) {
            this.spinner = false;
          }
        }
      )
    }
  }

  deleteDialog(storeName, articleNumber, name): void {
    const dialogRef = this.dialog.open(AdminDeleteComponent, {
      data: { storeName: storeName, articleNumber: articleNumber, name: name}
    } );
    dialogRef.afterClosed().subscribe(result => {
      this.loadProducts();
    });
  }
}
