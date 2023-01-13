import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaResolverService } from 'src/app/categoria-resolver.service';
import { CategoriaCadastrarEditarComponent } from './categoria-cadastrar-editar/categoria-cadastrar-editar.component';

const routes: Routes = [

  {path: "",
  component: CategoriaCadastrarEditarComponent,
  resolve: {
    tarefa: CategoriaResolverService
  }
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefaCadastrarEditarRoutingModule { }
