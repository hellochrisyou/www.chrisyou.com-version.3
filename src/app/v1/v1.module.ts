import { V1Component } from './v1.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [V1Component],
  imports: [CommonModule],
  exports: [V1Component]
})
export class V1Module {}
