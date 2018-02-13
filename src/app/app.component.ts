import { Component } from '@angular/core';
import { LoginService } from './_services/login/login.service';
import '../assets/css/styles.css';

@Component ({
  selector: 'notificator-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', "../../node_modules/semantic-ui/dist/semantic.min.css"]
})

export class AppComponent {
  constructor(private loginService: LoginService) { }


  ngOnInit() {
    this.loginService.autoLogin();
  }
}