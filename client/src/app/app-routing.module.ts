import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './pages/home/home.component'
import {AuthenticatorComponent} from "./tools/authenticator/authenticator.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "authenticator", component: AuthenticatorComponent},
  {path: "**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
