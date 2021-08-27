import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/app/models/product/product.model';
import { Store } from 'src/app/models/store/store.model';
import { IkeaService } from 'src/app/services/ikea-service/ikea-service.service';
import { AdminStockbeheerDeleteComponent } from '../stockbeheer-delete/admin-stockbeheer-delete.component';
import { AdminStockbeheerDetailsComponent } from '../stockbeheer-details/admin-stockbeheer-details.component';
import { AdminStockbeheerInputComponent } from '../stockbeheer-input/admin-stockbeheer-input.component';

@Component({
  templateUrl: './stock-overview.component.html',
  styleUrls: ['./stock-overview.component.scss']
})
export class StockOverviewComponent implements OnInit {
  stores: Store[];
  product: Product;
  spinner: Boolean = true;

  dataSource = new MatTableDataSource<Store>([]);
  displayedColumns: string[] = ['storeName', 'stock', 'acties'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ikeaservice: IkeaService,
    public dialog: MatDialog,
  ) {
    this.route.data.subscribe(({ data }) => {
      this.product = data;
    this.loadStores();
    });
  }

  ngOnInit(): void {
    this.loadStores();

    this.route.queryParamMap.subscribe((paramMap: ParamMap) => {
      const refresh = paramMap.get('refresh');
      if (refresh) {
        this.loadStores();
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadStores() {
    this.route.params.subscribe(params => {
      const articleNumber = this.route.snapshot.paramMap.get('articleNumber');

      this.ikeaservice.getProductByArticleNumber(articleNumber).subscribe(
        result => {
          this.product = result;
          this.stores = result.storeStocks;
          this.dataSource = new MatTableDataSource<Store>(result.storeStocks);
          if (result) {
            this.dataSource = new MatTableDataSource<Store>(result.storeStocks);
            this.spinner = false;
          }
        }
      )
    });
  }

  addDialog(articleNumber, name): void {
    const dialogRef = this.dialog.open(AdminStockbeheerInputComponent, {
      data: { articleNumber: articleNumber, name: name }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/admin/' + this.product.articleNumber + '/overview/stock'],{
        queryParams: {refresh: new Date().getTime()}
     });
    });
  }

  updateDialog(articleNumber, name, storeName): void {
    const dialogRef = this.dialog.open(AdminStockbeheerDetailsComponent, {
      data: { articleNumber: articleNumber, name: name, storeName: storeName }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/admin/' + this.product.articleNumber + '/overview/stock'],{
        queryParams: {refresh: new Date().getTime()}
     });
    });
  }

  deleteDialog(articleNumber, name, storeName): void {
    const dialogRef = this.dialog.open(AdminStockbeheerDeleteComponent, {
      data: { articleNumber: articleNumber, name: name, storeName: storeName }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/admin/' + this.product.articleNumber + '/overview/stock'],{
        queryParams: {refresh: new Date().getTime()}
     });
    });
  }
}
