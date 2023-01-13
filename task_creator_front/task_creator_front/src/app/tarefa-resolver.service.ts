import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { TarefaService } from './tarefas/tarefa.service';
import { of } from "rxjs";
import { tarefas } from './tarefas/tarefas.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaResolverService implements Resolve<tarefas>{

  constructor(private tarefaService: TarefaService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params["id"];
    if(id){
      return this.tarefaService.pesquisarPorId(id);
    }
    return of({} as tarefas);
}

}
