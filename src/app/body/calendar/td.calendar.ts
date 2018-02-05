import { Component, Input, OnInit } from '@angular/core';

import { getMonthNumberByShortName } from '../../_services/helpers';
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
    if(this.calendar.calendarState === 'month') { // --- if click on day of month ---
      if(!item.current) { // --- if click to day of next or previous month ---
	const day = parseInt(item.day, 10);
	if (day > 15) {
	  this.calendar.currentMonth = this.calendar.currentMonth - 1;
	} else {
	  this.calendar.currentMonth = this.calendar.currentMonth + 1;
	}
      } else { // --- if click on day of current month ---
      }
      this.calendar.currentDate = parseInt(item.day, 10);
      this.calendar.selectedDate = parseInt(item.day,10);
      this.calendar.selectedMonth = this.calendar.currentMonth;
      this.calendar.selectedYear = this.calendar.currentYear;
    } else if(this.calendar.calendarState === 'year') { // --- if click on month of year
      this.calendar.calendarState = 'month';
      this.calendar.currentMonth = getMonthNumberByShortName(item);
      this.calendar.selectedMonth = getMonthNumberByShortName(item);
      this.calendar.selectedYear = this.calendar.currentMonth;
      this.calendar.activateCurrentCalendarState();
      
    } else if(this.calendar.calendarState === 'age') { // --- if click on the year of age
      this.calendar.calendarState = 'year';
      this.calendar.currentYear = item;
      this.calendar.selectedYear = item;
      this.calendar.activateCurrentCalendarState();
      
    } else {}
    
  }

  isItemActive(item: any) {
    if(this.calendar.calendarState === 'age') {
      return this.calendar.selectedYear === parseInt(item, 10);
    } else if(this.calendar.calendarState === 'year') {
      return this.calendar.selectedYear === this.calendar.currentYear
	&& this.calendar.selectedMonth === getMonthNumberByShortName(item);
    } else if(this.calendar.calendarState === 'month') {
      return this.calendar.selectedYear === this.calendar.currentYear
	&& this.calendar.selectedMonth === this.calendar.currentMonth
	&& this.calendar.selectedDate === parseInt(item.day, 10)
	&& item.current === true;
    }
  }
}