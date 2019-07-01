import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VersionComponent } from './version.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [VersionComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  exports: [VersionComponent]
})
export class VersionModule {}
