import { Component, OnInit } from '@angular/core';

// Auth Service
import {AuthService} from "../../shared/services/auth";

@Component({
  selector: 'app-authenticator',
  templateUrl: './authenticator.component.html',
  styleUrls: ['./authenticator.component.css']
})
export class AuthenticatorComponent implements OnInit {
  state = AuthenticatorCompState.LOGIN
  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  onForgotPasswordClick(){
    this.state = AuthenticatorCompState.FORGOT_PASSWORD
  }

  onCreateAccountClick(){
    this.state = AuthenticatorCompState.REGISTER
  }

  onLoginClick(){
    this.state = AuthenticatorCompState.LOGIN
  }

  isLoginState(){
    return this.state == AuthenticatorCompState.LOGIN
  }

  isRegisterState(){
    return this.state == AuthenticatorCompState.REGISTER
  }

  isForgotPasswordState(){
    return this.state == AuthenticatorCompState.FORGOT_PASSWORD
  }

  getStateText(){
    switch(this.state){
      case AuthenticatorCompState.LOGIN :
        return "Login"
      case AuthenticatorCompState.REGISTER :
        return "Create Account"
      case AuthenticatorCompState.FORGOT_PASSWORD :
        return "Reset Password"
    }
  }

}

export enum AuthenticatorCompState {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD
}
