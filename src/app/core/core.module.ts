import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainContainerComponent } from './components/main-container/main-container.component';

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
    MainContainerComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class CoreModule { }
