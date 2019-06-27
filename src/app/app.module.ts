import { FlexLayoutModule } from '@angular/flex-layout';
import { SkillModule } from './skill/skill.module';
import { ProjectModule } from './project/project.module';
import { HomeModule } from './home/home.module';
import { BackgroundModule } from './background/background.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecordingModule } from './recording/recording.module';
import { ResumeModule } from './resume/resume.module';
import { TestimonialModule } from './testimonial/testimonial.module';
import { SocialMediaModule } from './social-media/social-media.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    SocialMediaModule,
    ReactiveFormsModule,
    MaterialModule,
    BackgroundModule,
    HomeModule,
    ProjectModule,
    RecordingModule,
    ResumeModule,
    SkillModule,
    TestimonialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
