
// Servicesw
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatTabsModule,
    MatSelectModule,
    MatGridListModule,
    MatDialogModule,
    FormsModule,
    MatProgressSpinnerModule,
    HttpClientModule,

    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
  ],
  exports: [
    RouterModule,
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatTabsModule,
    MatSelectModule,
    MatGridListModule,
    MatDialogModule,
    FormsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ]
})
export class SharedModule {
}