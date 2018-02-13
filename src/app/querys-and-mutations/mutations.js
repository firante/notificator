"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createUser = function (username, email, password) { return "mutation {\n  createUser (username: \"" + username + "\", email: \"" + email + "\", password: \"" + password + "\") {\n    status\n    profile {\n      token\n      username\n    }\n  }\n}"; };
exports.default = { createUser: createUser };
//# sourceMappingURL=mutations.js.map