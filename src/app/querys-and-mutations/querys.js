"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autoLogin = function (token) { return "{\n  autoLogin(token: \"" + token + "\") {\n    profile {\n      token\n      username\n    }\n  }\n}"; };
exports.login = function (email, password) { return "{\n  login(email: \"" + email + "\", password: \"" + password + "\") {\n    profile {\n      token\n      username\n    }\n  }\n}"; };
exports.getUserName = function (username) { return "{\n  user(username: \"" + username + "\") {\n    profile {\n      username\n    }\n  }\n}"; };
exports.isUsernameOrEmailExist = function (data) {
    if (data === void 0) { data = {}; }
    return "{\n  isUsernameOrEmailExist(username: \"" + data.username + "\", email: \"" + data.email + "\") {\n    profile {\n      username,\n      email\n    }\n  }\n}";
};
//# sourceMappingURL=querys.js.map