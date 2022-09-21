import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { SuccessRegisterComponent } from './success-register/success-register.component';
import { UserDetailsFormComponent } from './user-details-form/user-details-form.component';
import { PostulerComponent } from './postuler/postuler.component';
import { HistoriquesComponent } from './historiques/historiques.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AllRequestsComponent } from './admin/all-requests/all-requests.component';
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    IndexComponent,
    SuccessRegisterComponent,
    UserDetailsFormComponent,
    PostulerComponent,
    HistoriquesComponent,
    LoginAdminComponent,
    DashboardComponent,
    AllRequestsComponent,
    NavbarAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
