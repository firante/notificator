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
var querys_1 = require("../../_services/querys");
var RegisterComponent = (function () {
    function RegisterComponent(queryService, loginService, fb) {
        this.queryService = queryService;
        this.loginService = loginService;
        this.fb = fb;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.fb.group({
            'username': [null, [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(20)]],
            'email': [null],
            'password': [null, [forms_1.Validators.required, forms_1.Validators.minLength(8)]],
            'confirmPassword': [null, [forms_1.Validators.required, forms_1.Validators.minLength(8)]]
        }, {
            validator: forms_1.Validators.compose([validators_1.default.passwordMatch, validators_1.default.email])
        });
    };
    RegisterComponent.prototype.onSubmit = function (e) {
        var _this = this;
        e.preventDefault();
        var username = this.registerForm.get('username').value;
        var email = this.registerForm.get('email').value;
        var password = this.registerForm.get('password').value;
        this.queryService.isUsernameOrEmailExist({ username: username, email: email })
            .then(function (res) {
            if (res === void 0) { res = []; }
            return res.forEach(function (v) {
                console.log(v);
                v.profile.username === username && _this.registerForm.get('username').setErrors({ 'usernameExists': true });
                v.profile.email === email && _this.registerForm.get('email').setErrors({ 'emailExists': true });
            });
        });
        var loginData = { username: username, password: password, email: email };
        this.loginService.registerUser(loginData);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register-component',
            templateUrl: './register.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [querys_1.QueryService, login_service_1.LoginService, forms_1.FormBuilder])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map