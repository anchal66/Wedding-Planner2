import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';

const material = [
  MatButtonModule,
]
@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
