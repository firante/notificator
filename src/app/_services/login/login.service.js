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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var querys_1 = require("../querys");
var LoginService = (function () {
    function LoginService(_http, router, _query) {
        this._http = _http;
        this.router = router;
        this._query = _query;
        this._loggedIn = false;
        this._token = '';
        this._username = '';
    }
    Object.defineProperty(LoginService.prototype, "loggedIn", {
        get: function () {
            return this._loggedIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginService.prototype, "token", {
        get: function () {
            return this._token;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginService.prototype, "username", {
        get: function () {
            return this._username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginService.prototype, "authObj", {
        get: function () {
            return { loggedIn: this._loggedIn, token: this._token, username: this._username };
        },
        enumerable: true,
        configurable: true
    });
    // --- sign in user method, shoud receives (username, email, password) ---
    LoginService.prototype.registersUser = function (data) {
        var _this = this;
        this._query.registerUser(data)
            .then(function (user) {
            if (user && user.profile && user.profile.token) {
                _this._loggedIn = true;
                _this._token = user.profile.token;
                _this._username = user.profile.username;
                window.localStorage.setItem('token', user.profile.token);
                _this.router.navigate(['/home']);
            }
            else if (user && user.status) {
                console.log(user.status);
            }
            else {
                console.log('Registration failed!');
            }
        });
    };
    // --- autologin user method by token, should receive token from local storage. Token will be expired after 7 days ---
    LoginService.prototype.autoLogin = function () {
        var _this = this;
        this._query.autoLogin()
            .then(function (user) {
            if (user && user.profile && user.profile.token) {
                _this._loggedIn = true;
                _this._token = user.profile.token;
                _this._username = user.profile.username;
                _this.router.navigate(['/home']);
            }
            else {
                console.log('There is no valid token!');
            }
        });
    };
    // --- login user method, should receive email and password ---
    LoginService.prototype.login = function (data) {
        var _this = this;
        this._query.login(data)
            .then(function (user) {
            if (user && user.profile && user.profile.token) {
                _this._loggedIn = true;
                _this._token = user.profile.token;
                _this._username = user.profile.username;
                window.localStorage.setItem('token', user.profile.token);
                _this.router.navigate(['/home']);
            }
            else {
                console.log('Login or password are incorrect!');
            }
        });
    };
    LoginService.prototype.logout = function () {
        this._loggedIn = false;
        this._token = '';
        this._username = '';
        window.localStorage.removeItem('token');
        this.router.navigate(['/login']);
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router, querys_1.QueryService])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map