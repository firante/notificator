"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFullMonth(month) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'];
    return months[parseInt(month, 10)];
}
exports.getFullMonth = getFullMonth;
;
function getShortDays() {
    return ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
}
exports.getShortDays = getShortDays;
;
function getMonthNumberByShortName(month) {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    return months.indexOf(month) !== -1 ? months.indexOf(month) : null;
}
exports.getMonthNumberByShortName = getMonthNumberByShortName;
;
//# sourceMappingURL=calendar.helpers.js.map