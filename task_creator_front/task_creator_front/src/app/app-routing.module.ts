import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./tarefas/tarefas-listar/tarefas-listar.module').then(modulo => modulo.TarefasListarModule)
  },
  {
    path: "tarefas",
    loadChildren: () => import('./tarefas/tarefas-listar/tarefas-listar.module').then(modulo => modulo.TarefasListarModule)
  },
  {
    path: "categoria",
    loadChildren: () => import('./categoria/categoria-listar/categoria-listar.module').then(modulo => modulo.CategoriaListarModule)
  },
  {
    path: "status",
    loadChildren: () => import('./status/status-listar/status-listar.module').then(modulo => modulo.StatusListarModule)
  },
  
  {
    path: "tarefas/cadastrar",
    loadChildren: () => import('./tarefas/tarefa-cadastrar-editar/tarefa-cadastrar-editar.module').then(modulo => modulo.TarefaCadastrarEditarModule)
  },
  {
    path: "categoria/cadastrar",
    loadChildren: () => import('./categoria/categoria-cadastrar-editar/categoria-cadastrar-editar.module').then(modulo => modulo.CategoriaCadastrarEditarModule)
  },
  {
    path: "status/cadastrar",
    loadChildren: () => import('./status/status-cadastrar-editar/status-cadastrar-editar.module').then(modulo => modulo.StatusCadastrarEditarModule)
  },

  {
    path: "tarefas/editar/:id",
    loadChildren: () => import('./tarefas/tarefa-cadastrar-editar/tarefa-cadastrar-editar.module').then(modulo => modulo.TarefaCadastrarEditarModule)
  },
  {
    path: "categoria/editar/:id",
    loadChildren: () => import('./categoria/categoria-cadastrar-editar/categoria-cadastrar-editar.module').then(modulo => modulo.CategoriaCadastrarEditarModule)
  },
  {
    path: "status/editar/:id",
    loadChildren: () => import('./status/status-cadastrar-editar/status-cadastrar-editar.module').then(modulo => modulo.StatusCadastrarEditarModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
