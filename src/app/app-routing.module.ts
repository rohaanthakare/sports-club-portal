import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';

const routes: Routes = [{
  path: "",
  component: LoginComponent
}, {
  path: "home",
  loadChildren: () => import("./core/core.module").then(m => m.CoreModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
