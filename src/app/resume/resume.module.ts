import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ResumeComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [ResumeComponent]
})
export class ResumeModule {}
