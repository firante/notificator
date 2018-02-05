import { Component, OnInit } from '@angular/core';

import { getFullMonth, getShortDays } from '../../_services/helpers';
import Calendar from '../../_services/calendar/calendar';
import { TdCalendar } from './td.calendar';

@Component ({
  selector: 'calendar-component',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  constructor(private calendar: Calendar) {}

  ngOnInit() {
    this.calendar.calendarState === 'month';
    this.calendar.activateCurrentCalendarState();
  }

  getShortDays() {
    return getShortDays();
  };
  
  getCalendar() {
    return this.calendar.currentCalendarState;
  }

  getCalendarState(): string {
    return this.calendar.calendarState;
  }

  callendarHeader(): string {
    if(this.calendar.calendarState === 'month') {
      return `${getFullMonth(this.calendar.currentMonth)}, ${this.calendar.currentYear}`;
    } else if (this.calendar.calendarState === 'year') {
      return this.calendar.currentYear;
    } else if (this.calendar.calendarState === 'age') {
      return `${this.calendar.currentCalendarState[0][0]} - ${this.calendar.currentCalendarState[4][6]}`;
    } else {
      return null;
    }
  }
  
  getCurrentState(): string {
    return this.calendar.calendarState;
  }
  
  clickBack(): void {
    this.calendar.calendarState === 'month' && (this.calendar.currentMonth = this.calendar.currentMonth - 1);
    this.calendar.calendarState === 'year' && (this.calendar.currentYear = this.calendar.currentYear - 1);
    this.calendar.calendarState === 'age'
      && (this.calendar.currentYear = this.calendar.currentCalendarState[0][0])
      && this.calendar.activateCurrentCalendarState();
   }

  clickNext(): void {
    this.calendar.calendarState === 'month' && (this.calendar.currentMonth = this.calendar.currentMonth + 1);
    this.calendar.calendarState === 'year' && (this.calendar.currentYear = this.calendar.currentYear + 1);
    this.calendar.calendarState === 'age'
      && (this.calendar.currentYear = this.calendar.currentCalendarState[4][6])
      && this.calendar.activateCurrentCalendarState();
  }

  headClick() {
    if(this.calendar.calendarState === 'month') {
      this.calendar.calendarState = 'year';
      this.calendar.activateCurrentCalendarState();
      return;
    }
    if(this.calendar.calendarState === 'year') {
      this.calendar.calendarState = 'age';
      this.calendar.activateCurrentCalendarState();
      return;
    }
  }

  toTodayDate() {
    this.calendar.todayDate();
  }
}

