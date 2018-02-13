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
var forms_1 = require("@angular/forms");
var validators_1 = require("../../helpers/validators");
var login_service_1 = require("../../_services/login/login.service");
var LoginComponent = (function () {
    function LoginComponent(loginService, fb) {
        this.loginService = loginService;
        this.fb = fb;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            'email': [null],
            'password': [null, [forms_1.Validators.required, forms_1.Validators.minLength(8)]]
        }, {
            validator: validators_1.default.email
        });
    };
    LoginComponent.prototype.onSubmit = function (e) {
        e.preventDefault();
        var email = this.loginForm.get('email').value;
        var password = this.loginForm.get('password').value;
        var loginData = { email: email, password: password };
        this.loginService.login(loginData);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-component',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService, forms_1.FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map