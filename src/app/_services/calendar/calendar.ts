import { Injectable, OnInit } from '@angular/core';

@Injectable()

export default class Calendar implements OnInit {
  private _currentCalendarState: any[][];
  private _currentDate: any;
  private _currentMonth: any;
  private _currentYear: any;
  private _calendarState: string;
  private _monthState: any[6][7];
  private _yearState: any[][];

  constructor() {
    const date = new Date();
    this._currentYear = date.getFullYear();
    this._currentDate = date.getDate();
    this._currentMonth = date.getMonth();
    this._calendarState = 'month';
  }

  ngOnInit() { }
  
  get currentCalendarState(): any {
    return this._currentCalendarState;
  }

  get currentMonth(): any {
    return this._currentMonth;
  }

  get currentYear(): any {
    return this._currentYear;
  }
  
  get calendarState(): string {
    return this._calendarState;
  }

  set calendarState(calendarState) {
    this._calendarState = calendarState;
  }

  set currentMonth(newMonth) {
    if(parseInt(newMonth, 10) === -1) {
      this._currentMonth = 11;
      this._currentYear = this._currentYear - 1;
    } else if(parseInt(newMonth, 10) === 12) {
      this._currentMonth = 0;
      this._currentYear = this._currentYear + 1;
    } else {
      this._currentMonth = newMonth;
    }
    this._calendarState === 'month'
      && this.calculateMonthState()
      && this.activateMonthState();
  }
  
  calculateMonthState() {
    try {
      const newMonth: any[] = [];
      const firstDay = new Date(this._currentYear, this._currentMonth, 1);
      const dayOfWeek = firstDay.getDay() === 0 ? 7 : firstDay.getDay();
      let workingDate = new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() - dayOfWeek);
      for (let i = 0; i < 6; i++) {
	const arrRow: any[] = [];
	for (let j = 0; j < 7; j++) {
	  arrRow.push({ day: workingDate.getDate(), current: workingDate.getMonth() === firstDay.getMonth() });
	  workingDate = new Date(workingDate.getFullYear(), workingDate.getMonth(), workingDate.getDate() + 1);
	}
	newMonth.push(arrRow);
      }
      this._monthState = newMonth;
      return true;
    } catch(err) {
      console.log(err);
      return false;
    }
  }

  calculateYearsState() {
    try {
      this._yearState = [
	['Jan','Feb','Mar','Apr'],
	['May', 'Jun', 'Jul', 'Aug'],
	['Sept', 'Oct', 'Nov', 'Dec']
      ];
      
    } catch(err) {
      console.log(err);
    }
  }

  activateMonthState() {
    try {
      this._currentCalendarState = this._monthState;
      return true;
    } catch(err) {
      console.log(err);
      return false;
    }
  }

   activateYearState() {
    try {
      this._currentCalendarState = this._yearState;
      return true;
    } catch(err) {
      console.log(err);
      return false;
    }
  }
}