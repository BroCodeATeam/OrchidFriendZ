import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button'
import { MatBottomSheetModule } from '@angular/material/bottom-sheet'
import { MatCardModule } from '@angular/material/card'
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import {MatInputModule} from '@angular/material/input'
import { ReactiveFormsModule } from "@angular/forms";

import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";

import { environment } from 'src/environments/environment'
import { HomeComponent } from './pages/home/home.component';
import { AuthenticatorComponent } from './tools/authenticator/authenticator.component';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { ProfileComponent } from './tools/profile/profile.component';
import { PostFeedComponent } from './pages/post-feed/post-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticatorComponent,
    EmailVerificationComponent,
    ProfileComponent,
    PostFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
