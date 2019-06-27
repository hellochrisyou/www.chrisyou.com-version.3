import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordingComponent } from './recording.component';

@NgModule({
  declarations: [RecordingComponent],
  imports: [CommonModule],
  exports: [RecordingComponent]
})
export class RecordingModule {}
