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

  getCalendarState(): string {
    return this.calendar.calendarState;
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

  getCurrentState(): string {
    return this.calendar.calendarState;
  }
  
  clickMonthBack(): void {
    this.calendar.currentMonth = this.calendar.currentMonth - 1;
  }

  clickMonthNext(): void {
    this.calendar.currentMonth = this.calendar.currentMonth + 1;
  }

  toYear() {
    this.calendar.calendarState = 'year';
    this.calendar.calculateYearsState();
    this.calendar.activateYearState();
  }
}

