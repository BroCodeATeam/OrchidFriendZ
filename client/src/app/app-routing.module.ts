import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './pages/home/home.component'
import {AuthenticatorComponent} from "./tools/authenticator/authenticator.component";

// route guard
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "authenticator", component: AuthenticatorComponent},
  // for protected routes, just add 'canActivate: [AuthGuard]' to the Route
  {path: "**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
