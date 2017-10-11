import { Component, Input, OnInit } from '@angular/core';

@Component ({
    selector: '[td-calendar]',
    templateUrl: './td.calendar.html',
    styleUrls: ['./td.calendar.css']
})

export class TdCalendar implements OnInit {
  @Input() tdItem: any[];

  ngOnInit() {  }
  
  getTdItem(): string {
    return this.tdItem;
  }
}
