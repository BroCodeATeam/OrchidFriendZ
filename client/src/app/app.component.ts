import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth'
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';

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
  firestore = new FirebaseTSFirestore()
  isLoggedIn = false

  userHasProfile = true;
  userDocument: UserDocument | any

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
              this.getUserProfile()
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

  getUserProfile(){
    this.firestore.listenToDocument({
      name: "Getting Document",
      path: [
        "Users", this.auth?.getAuth()?.currentUser?.uid || '{}'
      ],
      onUpdate: (result) => {
        this.userDocument = <UserDocument>result.data()
        this.userHasProfile = result.exists
        if(this.userHasProfile){
          this.router.navigate(
            [
              "postFeed"
            ]
          )
        }
      }
    })
  }
}

export interface UserDocument {
  publicName: string
}
