import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "../app/login/login.component";
import { HomeComponent } from "../app/home/home.component";
import { ClientesComponent } from "../app/clientes/clientes.component";
import { ConsultasComponent } from "../app/consultas/consultas.component";





const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'consultas', component: ConsultasComponent },
  
  { path: 'home/:username', component: HomeComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: '**', component: ClientesComponent },
  
  
  
  { path: '', component: LoginComponent },
  
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
