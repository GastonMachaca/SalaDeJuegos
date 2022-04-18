import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreadorComponent } from './components/creador/creador.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'home', component:HomeComponent,children : [
    {path: 'quiensoy', component:CreadorComponent}
  ]},
  {path: '**',  pathMatch: 'full' ,redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
