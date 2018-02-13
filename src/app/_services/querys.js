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
var querys_1 = require("../querys-and-mutations/querys");
var querys_2 = require("../querys-and-mutations/querys");
var URL = 'http://localhost:9999/graphql';
var headers = new http_1.Headers();
headers.append('Content-Type', 'application/graphql');
var QueryService = (function () {
    function QueryService(_http) {
        var _this = this;
        this._http = _http;
        // --- check email or username existing queri ---
        this.isUsernameOrEmailExist = function (data) { return new Promise(function (resolve, reject) {
            var body = querys_1.isUsernameOrEmailExist(data);
            _this._http.post(URL, body, { headers: headers })
                .toPromise()
                .then(function (res) { return res.json(); })
                .then(function (result) { return resolve(result.data.isUsernameOrEmailExist); })
                .catch(function (err) { return console.log(err); });
        }); };
        // --- register user mutation ---
        this.registerUser = function (data) { return new Promise(function (resolve, reject) {
            var body = mutations.createUser(data.username, data.email, data.password);
            _this._http.post(URL, body, { headers: headers })
                .toPromise()
                .then(function (res) { return res.json; })
                .then(function (result) { return resolve(result.data.user); })
                .catch(function (err) { return console.log(err); });
        }); };
        // --- auto login user query ( if token is valid) --- 
        this.autoLogin = function () { return new Promise(function (resolve, reject) {
            var token = window.localStorage.getItem('token');
            var body = querys_2.autoLogin(token);
            _this._http.post(url, body, { headers: headers })
                .toPromise()
                .then(function (res) { return res.json(); })
                .then(function (result) { return resolve(result.data.user); })
                .catch(function (err) { return console.log(err); });
        }); };
        // --- login user query ---
        this.login = function (data) { return new Promise(function (resolve, reject) {
            var body = querys_2.login(data.email, data.password);
            _this._http.post(url, body, { headers: headers })
                .toPromise()
                .then(function (res) { return res.json(); })
                .then(function (result) { return resolve(result.data.user); })
                .catch(function (err) { return console.log(err); });
        }); };
    }
    QueryService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], QueryService);
    return QueryService;
}());
exports.QueryService = QueryService;
//# sourceMappingURL=querys.js.map