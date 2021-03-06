import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public credential = {
    username: '',
    password: '',
  };
  public loggedIn = false;

  constructor(private loginService: LoginService) {}

  onSubmit() {
    this.loginService
      .sendCredential(this.credential.username, this.credential.password)
      .subscribe(
        (res) => {
          console.log(res);
          localStorage.setItem('xAuthTocken', JSON.stringify(res));
          this.loggedIn = true;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  ngOnInit(): void {}
}
