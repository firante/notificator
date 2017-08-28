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
import { LoginService } from './_services/login/login.service';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

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
    HttpModule
  ],
  declarations: [
    AppComponent,
    HeaderMain,
    HeaderElement,
    LoginComponent,
    RegisterComponent,
    EventsComponent,
    HomeComponent
  ],
  providers: [LoginService],
  bootstrap: [ AppComponent ]
})

export class AppModule { }