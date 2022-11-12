import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet'

import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth'

@Component({
  selector: 'app-authenticator',
  templateUrl: './authenticator.component.html',
  styleUrls: ['./authenticator.component.css']
})
export class AuthenticatorComponent implements OnInit {
  state = AuthenticatorCompState.LOGIN
  firebasetsAuth: FirebaseTSAuth
  constructor(
    private bottomSheetRef: MatBottomSheetRef
  ) {
    this.firebasetsAuth = new FirebaseTSAuth()
  }

  ngOnInit(): void {
  }

  onRegisterClick(
    registerEmail: HTMLInputElement,
    registerPassword: HTMLInputElement,
    registerConfirmPassword: HTMLInputElement
  ){
    let email = registerEmail.value
    let password = registerPassword.value
    let confirmPassword = registerPassword.value

    if(
      this.isNotEmpty(email) &&
      this.isNotEmpty(password) &&
      this.isNotEmpty(confirmPassword) &&
      this.isAMatch(password, confirmPassword)
    ) {
      this.firebasetsAuth.createAccountWith(
        {
          email: email,
          password: password,
          onComplete: (uc) => {
            this.bottomSheetRef.dismiss()
          },
          onFail: (err) => {
            alert("Failed to create the account")
          }
        }
      )
    }
  }

  onLogin(
    loginEmail: HTMLInputElement,
    loginPassword: HTMLInputElement
  ){
    let email = loginEmail.value
    let password = loginPassword.value

    if(
      this.isNotEmpty(email) &&
      this.isNotEmpty(password)
    ) {
      this.firebasetsAuth.signInWith(
        {
          email: email,
          password: password,
          onComplete: (uc) => {
            this.bottomSheetRef.dismiss()
          },
          onFail: (err) => {
            alert(err)
          }
        }
      )
    }
  }

  onResetClick(resetEmail: HTMLInputElement){
    let email = resetEmail.value

    if(this.isNotEmpty(email)){
      this.firebasetsAuth.sendPasswordResetEmail(
        {
          email: email,
          onComplete: (uc) => {
            this.bottomSheetRef.dismiss()
          }
        }
      )
    }
  }

  isNotEmpty(text: string) {
    return text != null && text.length >0
  }

  isAMatch(text: string, comparedWith: string) {
    return text == comparedWith
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
      case AuthenticatorCompState.LOGIN:
        return "Login"
      case AuthenticatorCompState.REGISTER:
        return "Register"
      case AuthenticatorCompState.FORGOT_PASSWORD:
        return "Reset Password"
    }
  }

}

export enum AuthenticatorCompState {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD
}
