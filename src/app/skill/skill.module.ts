import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from './skill.component';

@NgModule({
  declarations: [SkillComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [SkillComponent]
})
export class SkillModule {}
