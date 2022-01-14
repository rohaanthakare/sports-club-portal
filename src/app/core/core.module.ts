import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from "primeng/card";
import { ImageModule } from "primeng/image";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { ButtonModule } from "primeng/button";
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
}];

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    NavigationComponent,
    MainContainerComponent,
    ForgotPasswordComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), InputTextModule, ButtonModule, CardModule,
    ImageModule, PasswordModule
  ]
})
export class CoreModule { }
