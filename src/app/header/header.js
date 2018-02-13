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
var login_service_1 = require("../_services/login/login.service");
var HeaderMain = (function () {
    function HeaderMain(loginService) {
        this.loginService = loginService;
    }
    HeaderMain.prototype.isLogin = function () {
        return this.loginService.loggedIn;
    };
    HeaderMain.prototype.getUserName = function () {
        return this.loginService.username;
    };
    HeaderMain = __decorate([
        core_1.Component({
            selector: 'header-main',
            templateUrl: './header.html',
            styleUrls: ['./header.css']
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService])
    ], HeaderMain);
    return HeaderMain;
}());
exports.HeaderMain = HeaderMain;
//# sourceMappingURL=header.js.map