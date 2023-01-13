import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusResolverService } from 'src/app/status-resolver.service';
import { StatusCadastrarEditarComponent } from './status-cadastrar-editar/status-cadastrar-editar.component';

const routes: Routes = [

  {path: "",
  component: StatusCadastrarEditarComponent,
  resolve: {
    tarefa: StatusResolverService
  }
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefaCadastrarEditarRoutingModule { }
