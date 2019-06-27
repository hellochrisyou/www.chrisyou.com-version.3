import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialComponent } from './testimonial.component';

@NgModule({
  declarations: [TestimonialComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [TestimonialComponent]
})
export class TestimonialModule {}
