import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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
  products: Product[];
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

    this.route.data.subscribe(({ data }) => {
      this.products = data
    this.loadProducts();
    });
  }

  ngOnInit(): void {
    this.route.data.subscribe(({ data }) => {
      this.products = data
    this.loadProducts();
    });

    this.route.queryParamMap.subscribe((paramMap: ParamMap) => {
      const refresh = paramMap.get('refresh');
      if (refresh) {
        this.loadProducts();
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  loadProducts() {
    this.ikeaservice.getProducts().subscribe(
      result => {
        this.products = result;

        this.categories = this.products.map(item => item.category)
          .filter((value, index, self) => self.indexOf(value) === index)
          this.dataSource = new MatTableDataSource<Product>(result);
        if (result) {
          this.dataSource = new MatTableDataSource<Product>(result);
          this.spinner = false;
        }
      }
    )
  }

  submitCategory(event: any) {
    this.spinner = true;

    if (event.value == "alle") {
      this.ikeaservice.getProducts().subscribe(
        result => {
          this.products = result;
          //  this.products = result.categoryProducts;
          this.dataSource = new MatTableDataSource<Product>(this.products);
          if (result) {
            this.spinner = false;
          }
        }
      )
    } else {
      this.ikeaservice.getProductsByCategory(event.value).subscribe(
        result => {
          this.products = result;
          //   this.products = result.categoryProducts;
          this.dataSource = new MatTableDataSource<Product>(this.products);
          if (result) {
            this.spinner = false;
          }
        }
      )
    }
  }

  deleteDialog(articleNumber, name): void {
    const dialogRef = this.dialog.open(AdminDeleteComponent, {
      data: { articleNumber: articleNumber, name: name }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadProducts();
    });
  }
}
