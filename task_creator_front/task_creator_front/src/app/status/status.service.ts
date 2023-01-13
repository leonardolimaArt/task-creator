import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { status } from './status.model';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private baseURL = 'http://localhost:8080';
  private endpoint = 'status';
  constructor(private httpClient: HttpClient) { }
  
  listar():Observable<status[]>{
    return this.httpClient.get<status[]>(this.baseURL+'/'+this.endpoint);
  }

  cadastrar(tarefa: status): Observable<status>{
    return this.httpClient.post<status>(this.baseURL+'/'+this.endpoint, tarefa);
  }

  pesquisarPorId(id: string): Observable<status>{
    return this.httpClient.get<status>(this.baseURL+'/'+this.endpoint+'/'+id);
  }

  atualizar(tarefa: status): Observable<status>{
    return this.httpClient.put<status>(this.baseURL+'/'+this.endpoint+'/'+tarefa.id, tarefa);
  }

  deletar(tarefa: status): Observable<{}>{
    return this.httpClient.delete(this.baseURL+'/'+this.endpoint+'/'+tarefa.id);
  }


}
