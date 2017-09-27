import { Component, Input } from '@angular/core';
import { LoginService } from '../_services/login/login.service';
import { Router } from '@angular/router';

@Component ({
  selector: 'header-element',
  templateUrl: './header.element.html',
  styleUrls: ['./header.element.css']
})

export class HeaderElement {
  @Input() text: string;
  
  constructor(private loginService: LoginService, private router: Router) {}

  getText(): string {
    if(this.text === 'Log in') {
      if(this.loginService.username) {
	return 'Log out';
      }
    }
    return this.text;
  }

  onClick(h_Text: string) {
    h_Text === 'Events' && this.router.navigate(['/events']);
    h_Text === 'Home' && this.router.navigate(['/home']);
    h_Text === 'Log in' && this.router.navigate(['/login']);
    h_Text === 'Log out' && this.loginService.logout();
  }
  
  getRoute(): string {
    return this.text === 'Log in' ? '/login' : this.text === 'Events' ? '/events' : '/home';
  }
}
