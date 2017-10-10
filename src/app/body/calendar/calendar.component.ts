import { Component } from '@angular/core';

import Calendar from '../../_services/calendar/calendar';
import { getFullMonth, getShortDays } from '../../_services/helpers';

@Component ({
    selector: 'calendar-component',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css']
})

export class CalendarComponent {
  constructor() {}

  // getCalendar() {
  //   this.calendar.currentCalendarState;
  // }

  getFullYear() {
    this.getFullYear();
  }

  getShortDay() {
    this.getShortDay();
  }
  
}

