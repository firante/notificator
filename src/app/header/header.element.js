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
var router_1 = require("@angular/router");
var HeaderElement = (function () {
    function HeaderElement(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    HeaderElement.prototype.getText = function () {
        if (this.text === 'Log in') {
            if (this.loginService.username) {
                return 'Log out';
            }
        }
        return this.text;
    };
    HeaderElement.prototype.onClick = function (h_Text) {
        h_Text === 'Events' && this.router.navigate(['/events']);
        h_Text === 'Home' && this.router.navigate(['/home']);
        h_Text === 'Log in' && this.router.navigate(['/login']);
        h_Text === 'Log out' && this.loginService.logout();
    };
    HeaderElement.prototype.getRoute = function () {
        return this.text === 'Log in' ? '/login' : this.text === 'Events' ? '/events' : '/home';
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HeaderElement.prototype, "text", void 0);
    HeaderElement = __decorate([
        core_1.Component({
            selector: 'header-element',
            templateUrl: './header.element.html',
            styleUrls: ['./header.element.css']
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router])
    ], HeaderElement);
    return HeaderElement;
}());
exports.HeaderElement = HeaderElement;
//# sourceMappingURL=header.element.js.map