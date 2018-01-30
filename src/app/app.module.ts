import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderMain } from './header/header';
import { HeaderElement } from './header/header.element';
import { LoginComponent } from './body/main-component/login.component';
import { RegisterComponent } from './body/main-component/register.component';
import { EventsComponent } from './body/main-component/events.component';
import { HomeComponent } from './body/main-component/home.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CalendarComponent } from './body/calendar/calendar.component';
import { TdCalendar } from './body/calendar/td.calendar';

import { LoginService } from './_services/login/login.service';
import Calendar  from './_services/calendar/calendar';

const routes = [
  { path: 'home', component: HomeComponent},
  { path: 'events', component: EventsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule ({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HeaderMain,
    HeaderElement,
    LoginComponent,
    RegisterComponent,
    EventsComponent,
    HomeComponent,
    CalendarComponent,
    TdCalendar
  ],
  providers: [LoginService, Calendar],
  bootstrap: [ AppComponent ]
})

export class AppModule { }