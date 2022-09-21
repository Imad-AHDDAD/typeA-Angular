import { AllRequestsComponent } from './admin/all-requests/all-requests.component';
import { AdminAuthGuard } from './services/admin-auth.guard';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { CompleteInfosInverseGuard } from './services/complete-infos-inverse.guard';
import { HistoriquesComponent } from './historiques/historiques.component';
import { PostulerComponent } from './postuler/postuler.component';
import { CompleteInfosProGuard } from './services/complete-infos-pro.guard';
import { UserDetailsFormComponent } from './user-details-form/user-details-form.component';
import { SuccessRegisterComponent } from './success-register/success-register.component';
import { IndexComponent } from './index/index.component';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: '', component: IndexComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'successRegister', component: SuccessRegisterComponent },
  { path: 'details', component: UserDetailsFormComponent, canActivate: [AuthGuard , CompleteInfosProGuard] },
  { path: 'postuler', component: PostulerComponent, canActivate: [AuthGuard , CompleteInfosInverseGuard] },
  { path: 'historiques', component: HistoriquesComponent, canActivate: [AuthGuard , CompleteInfosInverseGuard] },
  { path: 'ad/lg', component: LoginAdminComponent },
  { path: 'ad/dsb', component: DashboardComponent , canActivate: [AdminAuthGuard]},
  { path: 'ad/allRqsts', component: AllRequestsComponent , canActivate: [AdminAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
