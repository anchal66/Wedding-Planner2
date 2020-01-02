import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatListModule } from '@angular/material';

const material = [
  MatButtonModule,
  MatCardModule,
  MatListModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
