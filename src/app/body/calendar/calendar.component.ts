import { Component, OnInit } from '@angular/core';

import { getFullMonth, getShortDays } from '../../_services/helpers';
import Calendar from '../../_services/calendar/calendar';

@Component ({
    selector: 'calendar-component',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  constructor(private calendar: Calendar) {}

  ngOnInit() {
    this.calendar.calendarState === 'month'
      && this.calendar.calculateMonthState()
      && this.calendar.activateMonthState();
  }
  
  getCalendar() {
    return this.calendar.currentCalendarState;
  }

  getFullMonth() {
    return getFullMonth(this.calendar.currentMonth);
  }

  getShortDays() {
    return getShortDays();
  };

  getCurrentYear(): any {
    return this.calendar.currentYear;
  }
  
  clickMonthBack() {
    this.calendar.currentMonth = this.calendar.currentMonth - 1;
  }

  clickMonthNext() {
    this.calendar.currentMonth = this.calendar.currentMonth + 1;
  }
}

