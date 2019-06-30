import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-v1',
  templateUrl: './v1.component.html',
  styleUrls: ['./v1.component.css']
})
export class V1Component implements OnInit {
  constructor() {}

  ngOnInit() {
    this.scrollNav();
  }
  scrollNav() {
    $('.navbar a').click(function() {
      //Toggle Class
      $('.active').removeClass('active');
      $(this)
        .closest('li')
        .addClass('active');
      var theClass = $(this).attr('class');
      $('.' + theClass)
        .parent('li')
        .addClass('active');
      //Animate
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($(this).attr('href')).offset().top - 130
          },
          600
        );
      return false;
    });
    $('.scrollTop a').scrollTop();
  }
}
