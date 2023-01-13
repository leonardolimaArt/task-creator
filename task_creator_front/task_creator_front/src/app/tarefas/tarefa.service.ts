import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tarefas } from './tarefas.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
//  http://localhost:3000/tarefas
  private baseURL = 'http://localhost:8080';
  private endpoint = 'tarefa';
  constructor(private httpClient: HttpClient) { }
  
  listar():Observable<tarefas[]>{
    return this.httpClient.get<tarefas[]>(this.baseURL+'/'+this.endpoint);
  }

  cadastrar(tarefa: tarefas): Observable<tarefas>{
    return this.httpClient.post<tarefas>(this.baseURL+'/'+this.endpoint, tarefa);
  }

  pesquisarPorId(id: string): Observable<tarefas>{
    return this.httpClient.get<tarefas>(this.baseURL+'/'+this.endpoint+'/'+id);
  }

  pesquisarPorCat(id: string): Observable<tarefas[]>{
    return this.httpClient.get<tarefas[]>(this.baseURL+'/'+this.endpoint+'/categoria/'+id);
  }

  pesquisarPorSts(id: string): Observable<tarefas[]>{
    return this.httpClient.get<tarefas[]>(this.baseURL+'/'+this.endpoint+'/status/'+id);
  }

  atualizar(tarefa: tarefas): Observable<tarefas>{
    return this.httpClient.put<tarefas>(this.baseURL+'/'+this.endpoint+'/'+tarefa.id, tarefa);
  }

  deletar(tarefa: tarefas): Observable<{}>{
    return this.httpClient.delete(this.baseURL+'/'+this.endpoint+'/'+tarefa.id);
  }


}
