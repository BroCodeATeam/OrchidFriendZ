import { Component, OnInit } from '@angular/core';

// Material Imports
import { MatBottomSheet } from '@angular/material/bottom-sheet'

// component imports
import {AuthenticatorComponent} from "../../tools/authenticator/authenticator.component";

// Auth Service
import { AuthService } from '../../shared/services/auth'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public loginSheet: MatBottomSheet,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onGetStartedClick() {
    this.loginSheet.open(AuthenticatorComponent)
  }

}
