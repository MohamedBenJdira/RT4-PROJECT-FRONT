import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { RegistrationPageComponent } from './pages/auth/registration-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorMessageComponent } from './pages/auth/error-message/error-message.component';
import { AccountPageComponent } from './pages/account/account-page.component';
import { TopSectionComponent } from './pages/account/top-section/top-section.component';
import { MainSectionProfileComponent } from './pages/account/main-section-profile/main-section-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    RegistrationPageComponent,
    ErrorMessageComponent,
    AccountPageComponent,
    TopSectionComponent,
    MainSectionProfileComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
