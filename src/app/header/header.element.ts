import { Component, Input } from '@angular/core';
import { LoginService } from '../_services/login/login.service';

@Component ({
  selector: 'header-element',
  templateUrl: './header.element.html',
  styleUrls: ['./header.element.css']
})

export class HeaderElement {
  @Input() text: string;
  
  constructor(private loginService: LoginService) {}
  
  getRoute(): string {
    return this.text === 'Log in' ? '/login' : this.text === 'Events' ? '/events' : '/home';
  }
}
