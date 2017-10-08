import { Injectable } from '@angular/core';

@Injectable()

export class Calendar {
  private _currentCalendarState: any[][];
  
  private _monthState: any[6][7];

  get currentCalendarState() any[][] {
    return this._currentCalendarState;
  }

  calculateMonthState(date) {
    const newMonth: any[][];
    const date = date || new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const dayOfWeek = firstDay.getDay() === 0 ? 7 : firstDay.getDay();
    let workingDate = new Date(firstDay.getFullYear(), date.getMonth(), date.getDate() - dayOfWeek);
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
	newMonth[i][j] = { day: workingDate.getDate(), current: workingDate.getMonth() === firstDay.getDate() };
	workingDate = new Date(workingDate.getFullYear(), workingDate.getMonth(), workingDate.getDate() + 1);
      }
    }
    this._monthState = newMonth;
  }
  
  calculateStates() {
    calculateMonthState();
  }
}