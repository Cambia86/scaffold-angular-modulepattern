import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authentication: AuthenticationService, private router: Router) { }

    ngOnInit() {
    }

    login(username, password) {
        this.authentication.login(username, password);
    }

}
