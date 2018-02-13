"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EMAIL_REGEXP = /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,}$/i;
var email = function (c) { return EMAIL_REGEXP.test(c.get('email').value) ? c.get('email').setErrors(null) : c.get('email').setErrors({ 'invalidEmail': true }); };
var passwordMatch = function (c) { return c.get('password').value === c.get('confirmPassword').value ? c.get('confirmPassword').setErrors(null) : c.get('confirmPassword').setErrors({ 'MatchPassword': true }); };
exports.default = { email: email, passwordMatch: passwordMatch };
//# sourceMappingURL=validators.js.map