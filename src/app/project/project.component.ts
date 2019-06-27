import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  scroll(el: any) {
    document.getElementById(el as any).scrollIntoView();
  }
}
