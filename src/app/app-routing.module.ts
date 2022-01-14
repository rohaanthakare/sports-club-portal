import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './core/components/forgot-password/forgot-password.component';
import { LoginComponent } from './core/components/login/login.component';
import { RegisterComponent } from './core/components/register/register.component';

const routes: Routes = [{
  path: "",
  component: LoginComponent
}, {
  path: "forgot-password",
  component: ForgotPasswordComponent
}, {
  path: "register",
  component: RegisterComponent
}, {
  path: "home",
  loadChildren: () => import("./core/core.module").then(m => m.CoreModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
