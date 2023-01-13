import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { StatusService } from './status/status.service';
import { of } from "rxjs";
import { status } from './status/status.model';

@Injectable({
  providedIn: 'root'
})
export class StatusResolverService implements Resolve<status>{

  constructor(private tarefaService: StatusService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params["id"];
    if(id){
      return this.tarefaService.pesquisarPorId(id);
    }
    return of({} as status);
}

}
