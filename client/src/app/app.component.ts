import { Component } from '@angular/core';

// Material Imports
import { MatBottomSheet } from '@angular/material/bottom-sheet'
import {AuthService} from "./shared/services/auth";
import {AuthenticatorComponent} from "./tools/authenticator/authenticator.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(
    private loginSheet: MatBottomSheet,
    public authService: AuthService
  ){}

  onLoginClick(){
    this.loginSheet.open(AuthenticatorComponent)
  }

  loggedIn(){
    return this.authService.isLoggedIn
  }

}
