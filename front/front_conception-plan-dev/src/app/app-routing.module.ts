import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SallesComponent } from './salles/salles.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "salles", component: SallesComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
