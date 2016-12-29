import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderMain } from './header/header';
import { HeaderElement } from './header/header.element';

@NgModule ({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
	HeaderMain,
	HeaderElement
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }