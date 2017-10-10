import { Injectable, OnInit } from '@angular/core';

@Injectable()

export default class Calendar implements OnInit {
  private _currentCalendarState: any[][];
  private _currentDate: any;
  private _currentMonth: any;
  private _currentYear: any;
  private _monthState: any[6][7];

  ngOnInit() {
    const date = new Date();
    this._currentYear = date.getFullYear();
    this._currentDate = date.getDate();
    this._currentMonth = date.getMonth();
    this.calculateMonthState();
    this.activateMonthState();
  }
  
  get currentCalendarState(): any {
    return this._currentCalendarState;
  }

  calculateMonthState() {
    const newMonth;
    const firstDay = new Date(this._currentYear, this._currentMonth, 1);
    const dayOfWeek = firstDay.getDay() === 0 ? 7 : firstDay.getDay();
    let workingDate = new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() - dayOfWeek);
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
	newMonth[i][j] = { day: workingDate.getDate(), current: workingDate.getMonth() === firstDay.getDate() };
	workingDate = new Date(workingDate.getFullYear(), workingDate.getMonth(), workingDate.getDate() + 1);
      }
    }
    this._monthState = newMonth;
  }

  activateMonthState() {
    this._currentCalendarState = this._monthState;
  }
}