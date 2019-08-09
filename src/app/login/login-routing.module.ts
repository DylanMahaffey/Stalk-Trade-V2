import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginFormComponent } from './login-page/login-form/login-form.component';
import { RegisterFormComponent } from './login-page/register-form/register-form.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent, children: [
      { path: '', component: LoginFormComponent },
      { path: 'register', component: RegisterFormComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
