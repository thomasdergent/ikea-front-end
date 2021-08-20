import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'src/app/models/store/store.model';
import { IkeaService } from 'src/app/services/ikea-service/ikea-service.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  
  stores: Store[];

  constructor(
    private router: Router,
    private ikeaservice: IkeaService,
  ) { }

  ngOnInit(): void {
    this.ikeaservice.getStores().subscribe(
      result => {
        this.stores = result;
        console.log(result);
      }
    )
  }
}
