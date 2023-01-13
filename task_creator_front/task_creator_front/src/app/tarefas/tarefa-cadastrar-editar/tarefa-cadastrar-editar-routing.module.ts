import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaResolverService } from 'src/app/tarefa-resolver.service';
import { TarefaCadastrarEditarComponent } from './tarefa-cadastrar-editar/tarefa-cadastrar-editar.component';

const routes: Routes = [

  {path: "",
  component: TarefaCadastrarEditarComponent,
  resolve: {
    tarefa: TarefaResolverService
  }
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefaCadastrarEditarRoutingModule { }
