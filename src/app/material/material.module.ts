import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
