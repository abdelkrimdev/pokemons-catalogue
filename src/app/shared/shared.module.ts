import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';

const MaterialModules = [
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ...MaterialModules
  ]
})
export class SharedModule { }
