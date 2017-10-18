import { Component, Input, OnInit } from '@angular/core';

import Calendar from '../../_services/calendar/calendar';

@Component ({

selector: '[td-calendar]',
    templateUrl: './td.calendar.html',
    styleUrls: ['./td.calendar.css']
})

export class TdCalendar implements OnInit {
  constructor(private calendar: Calendar) { }
  @Input() tdItem: string;

  ngOnInit() { }
  
  getTdItem(): string {
    return this.tdItem;
  }

  getCalendarState(): string {
    return this.calendar.calendarState;
  }

  
  dayClick(item: any): void {
    if (item && item.day && !item.current) {
      const day = parseInt(item.day, 10);
      if (day > 15) {
	this.calendar.currentMonth = this.calendar.currentMonth - 1;
      } else {
	this.calendar.currentMonth = this.calendar.currentMonth + 1;
      }
    }
  
  }
}
