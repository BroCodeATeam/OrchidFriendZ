import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth'

import { MatBottomSheet } from '@angular/material/bottom-sheet'
import {AuthenticatorComponent} from "./tools/authenticator/authenticator.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  auth = new FirebaseTSAuth()
  isLoggedIn = false

  constructor(
    private loginSheet: MatBottomSheet,
    private router: Router
  ){
    this.auth.listenToSignInStateChanges(
      user => {
        this.auth.checkSignInState(
          {
            whenSignedIn: user => {
            },
            whenSignedOut: user => {
            },
            whenSignedInAndEmailNotVerified: user => {
             this.router.navigate(
               [
                 "emailVerification"
               ]
             )
            },
            whenSignedInAndEmailVerified: user => {
            },
            whenChanged: user => {
            }
          }
        )
      }
    )
  }

  loggedIn() {
    return this.auth.isSignedIn()
  }

  onLoginClick() {
      this.loginSheet.open(AuthenticatorComponent)
  }

  onLogoutClick(){
    this.auth.signOut()
  }
}
