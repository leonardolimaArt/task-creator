import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefasListarComponent } from './tarefas-listar/tarefas-listar.component';

const routes: Routes = [
  {
    path: "", component: TarefasListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefasListarRoutingModule { }
