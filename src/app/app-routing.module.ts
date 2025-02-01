import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { NotFoundPageComponent } from "./not-found/not-found-page.component";
import { SignupCardComponent } from './pages/auth/signup-card/signup-card.component';
import { LoginCardComponent } from './pages/auth/login-card/login-card.component';
import { RegistrationPageComponent } from './pages/auth/registration-page.component';
import { UnauthenticatedGuard } from './guards/unauthenticated.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: "not-found", component: NotFoundPageComponent },
  { path: "**", redirectTo: "not-found" },
  { path: "signup", component: SignupCardComponent },
  {
    path: "register",
    component: RegistrationPageComponent,
    children: [
      {
        path: "",
        redirectTo: "/register/login",
        pathMatch: "full",
        canActivate: [UnauthenticatedGuard]
      },
      {
        path: "login",
        component: LoginCardComponent,
        canActivate: [UnauthenticatedGuard]
      },
      {
        path: "signup",
        component: SignupCardComponent,
        canActivate: [UnauthenticatedGuard]
      }
    ],
    canActivate: [UnauthenticatedGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
