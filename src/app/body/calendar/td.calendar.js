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
var TdCalendar = (function () {
    function TdCalendar(calendar) {
        this.calendar = calendar;
    }
    TdCalendar.prototype.ngOnInit = function () { };
    TdCalendar.prototype.getTdItem = function () {
        return this.tdItem;
    };
    TdCalendar.prototype.getCalendarState = function () {
        return this.calendar.calendarState;
    };
    TdCalendar.prototype.dayClick = function (item) {
        if (this.calendar.calendarState === 'month') {
            if (!item.current) {
                var day = parseInt(item.day, 10);
                if (day > 15) {
                    this.calendar.currentMonth = this.calendar.currentMonth - 1;
                }
                else {
                    this.calendar.currentMonth = this.calendar.currentMonth + 1;
                }
            }
            else {
            }
            this.calendar.currentDate = parseInt(item.day, 10);
            this.calendar.selectedDate = parseInt(item.day, 10);
            this.calendar.selectedMonth = this.calendar.currentMonth;
            this.calendar.selectedYear = this.calendar.currentYear;
        }
        else if (this.calendar.calendarState === 'year') {
            this.calendar.calendarState = 'month';
            this.calendar.currentMonth = calendar_helpers_1.getMonthNumberByShortName(item);
            this.calendar.selectedMonth = calendar_helpers_1.getMonthNumberByShortName(item);
            this.calendar.selectedYear = this.calendar.currentMonth;
            this.calendar.activateCurrentCalendarState();
        }
        else if (this.calendar.calendarState === 'age') {
            this.calendar.calendarState = 'year';
            this.calendar.currentYear = item;
            this.calendar.selectedYear = item;
            this.calendar.activateCurrentCalendarState();
        }
        else { }
    };
    TdCalendar.prototype.isItemActive = function (item) {
        if (this.calendar.calendarState === 'age') {
            return this.calendar.selectedYear === parseInt(item, 10);
        }
        else if (this.calendar.calendarState === 'year') {
            return this.calendar.selectedYear === this.calendar.currentYear
                && this.calendar.selectedMonth === calendar_helpers_1.getMonthNumberByShortName(item);
        }
        else if (this.calendar.calendarState === 'month') {
            return this.calendar.selectedYear === this.calendar.currentYear
                && this.calendar.selectedMonth === this.calendar.currentMonth
                && this.calendar.selectedDate === parseInt(item.day, 10)
                && item.current === true;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TdCalendar.prototype, "tdItem", void 0);
    TdCalendar = __decorate([
        core_1.Component({
            selector: '[td-calendar]',
            templateUrl: './td.calendar.html',
            styleUrls: ['./td.calendar.css']
        }),
        __metadata("design:paramtypes", [calendar_1.default])
    ], TdCalendar);
    return TdCalendar;
}());
exports.TdCalendar = TdCalendar;
//# sourceMappingURL=td.calendar.js.map