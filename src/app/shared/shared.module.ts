import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    // Angular Material Modules
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
