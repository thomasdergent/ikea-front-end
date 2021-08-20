import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'src/app/models/store/store.model';
import { IkeaService } from 'src/app/services/ikea-service/ikea-service.service';

@Component({
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss']
})
export class AdminPageComponent implements OnInit {
  
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
