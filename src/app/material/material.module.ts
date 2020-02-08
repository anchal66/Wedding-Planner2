import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatListModule, MatMenuModule } from '@angular/material';

const material = [
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatMenuModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
