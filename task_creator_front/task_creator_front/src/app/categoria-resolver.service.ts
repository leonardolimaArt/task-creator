import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CategoriaService } from './categoria/categoria.service';
import { of } from "rxjs";
import { categoria } from './categoria/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaResolverService implements Resolve<categoria>{

  constructor(private tarefaService: CategoriaService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params["id"];
    if(id){
      return this.tarefaService.pesquisarPorId(id);
    }
    return of({} as categoria);
}

}
