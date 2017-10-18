import { Injectable, OnInit } from '@angular/core';

@Injectable()

export default class Calendar implements OnInit {
  private _currentCalendarState: any[][];
  private _currentDate: any;
  private _currentMonth: any;
  private _currentYear: any;
  private _calendarState: string;
  private _monthState: any[6][7];
  private _yearState: any[3][4];
  private _ageState: any[5][7];
  private _selectedDate: any;
  private _selectedMonth: any;
  private _selectedYear: any;

  constructor() {
    const date = new Date();
    this._selectedDate = this._currentDate = date.getDate();
    this._selectedMonth = this._currentMonth = date.getMonth();
    this._selectedYear = this._currentYear = date.getFullYear();
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

  get selectedDate(): any {
    return this._selectedDate;
  }

  get selectedMonth(): any {
    return this._selectedMonth;
  }

  get selectedYear(): any {
    return this._selectedYear;
  }

  set selectedDate(newDate: any) {
    this._selectedDate = parseInt(newDate, 10);
  }

  set selectedMonth(newMonth: any) {
    this._selectedMonth = parseInt(newMonth, 10);
  }

  set selectedYear(newYear: any) {
    this._selectedYear = parseInt(newYear, 10);
  }
  
  get calendarState(): string {
    return this._calendarState;
  }

  set calendarState(calendarState: any) {
    this._calendarState = calendarState;
  }

  set currentDate(newDate: any) {
    this._currentDate = parseInt(newDate, 10);
  }
  
  set currentMonth(newMonth) {
    if(parseInt(newMonth, 10) === -1) {
      this._currentMonth = 11;
      this._currentYear = this._currentYear - 1;
    } else if(parseInt(newMonth, 10) === 12) {
      this._currentMonth = 0;
      this._currentYear = this._currentYear + 1;
    } else {
      this._currentMonth = parseInt(newMonth, 10);
    }
    this._calendarState === 'month'
      && this.calculateMonthState()
      && this.activateCurrentCalendarState();
  }

  set currentYear(newYear) {
    this._currentYear = parseInt(newYear, 10);
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
      return true;
    } catch(err) {
      console.log(err);
      return false;
    }
  }

  calculateAgeState() {
    try {
      const ageState: string[] = [];
      let firstYear: number = parseInt(this._currentYear, 10) - 17;
      for (let i = 0; i < 5; i++) {
	const arrRow: string[] = [];
	for (let j = 0; j < 7; j++) {
	  arrRow.push(firstYear);
	  firstYear += 1;
	}
	ageState.push(arrRow);
      }
      this._ageState = ageState;
      return true;
    } catch(err) {
      console.log(err);
      return false;
    }
  }

  activateCurrentCalendarState() {
    try {
      this._calendarState === 'month'
	&& this.calculateMonthState()
	&& (this._currentCalendarState = this._monthState);
      this._calendarState === 'year'
	&& this.calculateYearsState()
	&& (this._currentCalendarState = this._yearState);
      this._calendarState === 'age'
	&& this.calculateAgeState()
	&& (this._currentCalendarState = this._ageState);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  todayDate() {
    const date = new Date();
    this._currentDate = date.getDate();
    this._currentMonth = date.getMonth();
    this._currentYear = date.getFullYear();
    this._calendarState = 'month';
    this.activateCurrentCalendarState();
  }
}