import { Component, Input, OnInit } from '@angular/core';

import { getMonthNomberByShortName } from '../../_services/helpers';
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
    if (this.calendar.calendarState === 'month') { // --- if click on day of month ---
      if(!item.current) { // --- if click to day of next or previous month ---
	const day = parseInt(item.day, 10);
	if (day > 15) {
	  this.calendar.currentMonth = this.calendar.currentMonth - 1;
	} else {
	  this.calendar.currentMonth = this.calendar.currentMonth + 1;
	}
      } else { // --- if click on day of current month ---
	
      }
    } else if (this.calendar.calendarState === 'year') { // --- if click on month of year
      this.calendar.calendarState = 'month';
      this.calendar.currentMonth = getMonthNomberByShortName(item);
      this.calendar.calculateMonthState()
	&& this.calendar.activateMonthState();
    } else {}
  
  }
}
