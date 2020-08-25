import { IncluirSistemaComponent } from './incluir-sistema/incluir-sistema.component';
import { SistemaDetailsComponent } from './sistema-details/sistema-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SistemaListComponent } from './sistema-list/sistema-list.component';
import { UpdateSistemaComponent } from './update-sistema/update-sistema.component';

const routes: Routes = [
  { path: '', redirectTo: 'sistema', pathMatch: 'full' },
  { path: 'sistemas', component: SistemaListComponent },
  { path: 'incluir', component: IncluirSistemaComponent },
  { path: 'update/:id', component: UpdateSistemaComponent },
  { path: 'details/:id', component: SistemaDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
