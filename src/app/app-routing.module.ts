import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServiceComponent } from './pages/service/service.component';
import { AboutComponent } from './pages/about/about.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {path:'home', component: HomeComponent, canActivate:[AuthGuardService]},
  {path:'contact', component: ContactComponent, canActivate:[AuthGuardService]},
  {path: 'service', component: ServiceComponent, canActivate:[AuthGuardService]},
  {path: 'about', component: AboutComponent, canActivate:[AuthGuardService]},
  {path: 'user', component: UserComponent, canActivate:[AuthGuardService]},
  {path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
