"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Calendar = (function () {
    function Calendar() {
        var date = new Date();
        this._selectedDate = this._currentDate = date.getDate();
        this._selectedMonth = this._currentMonth = date.getMonth();
        this._selectedYear = this._currentYear = date.getFullYear();
        this._calendarState = 'month';
    }
    Calendar.prototype.ngOnInit = function () { };
    Object.defineProperty(Calendar.prototype, "currentCalendarState", {
        get: function () {
            return this._currentCalendarState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Calendar.prototype, "currentMonth", {
        get: function () {
            return this._currentMonth;
        },
        set: function (newMonth) {
            if (parseInt(newMonth, 10) === -1) {
                this._currentMonth = 11;
                this._currentYear = this._currentYear - 1;
            }
            else if (parseInt(newMonth, 10) === 12) {
                this._currentMonth = 0;
                this._currentYear = this._currentYear + 1;
            }
            else {
                this._currentMonth = parseInt(newMonth, 10);
            }
            this._calendarState === 'month'
                && this.calculateMonthState()
                && this.activateCurrentCalendarState();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Calendar.prototype, "currentYear", {
        get: function () {
            return this._currentYear;
        },
        set: function (newYear) {
            this._currentYear = parseInt(newYear, 10);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Calendar.prototype, "selectedDate", {
        get: function () {
            return this._selectedDate;
        },
        set: function (newDate) {
            this._selectedDate = parseInt(newDate, 10);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Calendar.prototype, "selectedMonth", {
        get: function () {
            return this._selectedMonth;
        },
        set: function (newMonth) {
            this._selectedMonth = parseInt(newMonth, 10);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Calendar.prototype, "selectedYear", {
        get: function () {
            return this._selectedYear;
        },
        set: function (newYear) {
            this._selectedYear = parseInt(newYear, 10);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Calendar.prototype, "calendarState", {
        get: function () {
            return this._calendarState;
        },
        set: function (calendarState) {
            this._calendarState = calendarState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Calendar.prototype, "currentDate", {
        set: function (newDate) {
            this._currentDate = parseInt(newDate, 10);
        },
        enumerable: true,
        configurable: true
    });
    Calendar.prototype.calculateMonthState = function () {
        try {
            var newMonth = [];
            var firstDay = new Date(this._currentYear, this._currentMonth, 1);
            var dayOfWeek = firstDay.getDay() === 0 ? 7 : firstDay.getDay();
            var workingDate = new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() - dayOfWeek);
            for (var i = 0; i < 6; i++) {
                var arrRow = [];
                for (var j = 0; j < 7; j++) {
                    arrRow.push({ day: workingDate.getDate(), current: workingDate.getMonth() === firstDay.getMonth() });
                    workingDate = new Date(workingDate.getFullYear(), workingDate.getMonth(), workingDate.getDate() + 1);
                }
                newMonth.push(arrRow);
            }
            this._monthState = newMonth;
            return true;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    };
    Calendar.prototype.calculateYearsState = function () {
        try {
            this._yearState = [
                ['Jan', 'Feb', 'Mar', 'Apr'],
                ['May', 'Jun', 'Jul', 'Aug'],
                ['Sept', 'Oct', 'Nov', 'Dec']
            ];
            return true;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    };
    Calendar.prototype.calculateAgeState = function () {
        try {
            var ageState = [];
            var firstYear = parseInt(this._currentYear, 10) - 17;
            for (var i = 0; i < 5; i++) {
                var arrRow = [];
                for (var j = 0; j < 7; j++) {
                    arrRow.push(firstYear.toString());
                    firstYear += 1;
                }
                ageState.push(arrRow);
            }
            this._ageState = ageState;
            return true;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    };
    Calendar.prototype.activateCurrentCalendarState = function () {
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
        }
        catch (err) {
            console.log(err);
            return false;
        }
    };
    Calendar.prototype.todayDate = function () {
        var date = new Date();
        this._currentDate = this._selectedDate = date.getDate();
        this._currentMonth = this._selectedMonth = date.getMonth();
        this._currentYear = this._selectedYear = date.getFullYear();
        this._calendarState = 'month';
        this.activateCurrentCalendarState();
    };
    Calendar = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], Calendar);
    return Calendar;
}());
exports.default = Calendar;
//# sourceMappingURL=calendar.js.map