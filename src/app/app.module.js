"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var header_1 = require("./header/header");
var header_element_1 = require("./header/header.element");
var login_component_1 = require("./body/main-component/login.component");
var register_component_1 = require("./body/main-component/register.component");
var events_component_1 = require("./body/main-component/events.component");
var home_component_1 = require("./body/main-component/home.component");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var http_1 = require("@angular/http");
var calendar_component_1 = require("./body/calendar/calendar.component");
var td_calendar_1 = require("./body/calendar/td.calendar");
var querys_1 = require("./_services/querys");
var login_service_1 = require("./_services/login/login.service");
var calendar_1 = require("./_services/calendar/calendar");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'events', component: events_component_1.EventsComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: '**', redirectTo: 'home' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes),
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                header_1.HeaderMain,
                header_element_1.HeaderElement,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                events_component_1.EventsComponent,
                home_component_1.HomeComponent,
                calendar_component_1.CalendarComponent,
                td_calendar_1.TdCalendar
            ],
            providers: [login_service_1.LoginService, calendar_1.default, querys_1.QueryService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map