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
var calendar_helpers_1 = require("../../helpers/calendar.helpers");
var calendar_1 = require("../../_services/calendar/calendar");
var CalendarComponent = (function () {
    function CalendarComponent(calendar) {
        this.calendar = calendar;
    }
    CalendarComponent.prototype.ngOnInit = function () {
        this.calendar.calendarState === 'month';
        this.calendar.activateCurrentCalendarState();
    };
    CalendarComponent.prototype.getShortDays = function () {
        return calendar_helpers_1.getShortDays();
    };
    ;
    CalendarComponent.prototype.getCalendar = function () {
        return this.calendar.currentCalendarState;
    };
    CalendarComponent.prototype.getCalendarState = function () {
        return this.calendar.calendarState;
    };
    CalendarComponent.prototype.callendarHeader = function () {
        if (this.calendar.calendarState === 'month') {
            return calendar_helpers_1.getFullMonth(this.calendar.currentMonth) + ", " + this.calendar.currentYear;
        }
        else if (this.calendar.calendarState === 'year') {
            return this.calendar.currentYear;
        }
        else if (this.calendar.calendarState === 'age') {
            return this.calendar.currentCalendarState[0][0] + " - " + this.calendar.currentCalendarState[4][6];
        }
        else {
            return null;
        }
    };
    CalendarComponent.prototype.getCurrentState = function () {
        return this.calendar.calendarState;
    };
    CalendarComponent.prototype.clickBack = function () {
        this.calendar.calendarState === 'month' && (this.calendar.currentMonth = this.calendar.currentMonth - 1);
        this.calendar.calendarState === 'year' && (this.calendar.currentYear = this.calendar.currentYear - 1);
        this.calendar.calendarState === 'age'
            && (this.calendar.currentYear = this.calendar.currentCalendarState[0][0])
            && this.calendar.activateCurrentCalendarState();
    };
    CalendarComponent.prototype.clickNext = function () {
        this.calendar.calendarState === 'month' && (this.calendar.currentMonth = this.calendar.currentMonth + 1);
        this.calendar.calendarState === 'year' && (this.calendar.currentYear = this.calendar.currentYear + 1);
        this.calendar.calendarState === 'age'
            && (this.calendar.currentYear = this.calendar.currentCalendarState[4][6])
            && this.calendar.activateCurrentCalendarState();
    };
    CalendarComponent.prototype.headClick = function () {
        if (this.calendar.calendarState === 'month') {
            this.calendar.calendarState = 'year';
            this.calendar.activateCurrentCalendarState();
            return;
        }
        if (this.calendar.calendarState === 'year') {
            this.calendar.calendarState = 'age';
            this.calendar.activateCurrentCalendarState();
            return;
        }
    };
    CalendarComponent.prototype.toTodayDate = function () {
        this.calendar.todayDate();
    };
    CalendarComponent = __decorate([
        core_1.Component({
            selector: 'calendar-component',
            templateUrl: './calendar.component.html',
            styleUrls: ['./calendar.component.css']
        }),
        __metadata("design:paramtypes", [calendar_1.default])
    ], CalendarComponent);
    return CalendarComponent;
}());
exports.CalendarComponent = CalendarComponent;
//# sourceMappingURL=calendar.component.js.map