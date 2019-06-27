import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaComponent } from './social-media.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SocialMediaComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [SocialMediaComponent]
})
export class SocialMediaModule {}
