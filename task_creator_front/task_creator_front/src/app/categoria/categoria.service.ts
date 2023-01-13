import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseURL = 'http://localhost:8080';
  private endpoint = 'categoria';
  constructor(private httpClient: HttpClient) { }
  
  listar():Observable<categoria[]>{
    return this.httpClient.get<categoria[]>(this.baseURL+'/'+this.endpoint);
  }

  cadastrar(tarefa: categoria): Observable<categoria>{
    return this.httpClient.post<categoria>(this.baseURL+'/'+this.endpoint, tarefa);
  }

  pesquisarPorId(id: string): Observable<categoria>{
    return this.httpClient.get<categoria>(this.baseURL+'/'+this.endpoint+'/'+id);
  }

  atualizar(tarefa: categoria): Observable<categoria>{
    return this.httpClient.put<categoria>(this.baseURL+'/'+this.endpoint+'/'+tarefa.id, tarefa);
  }

  deletar(tarefa: categoria): Observable<{}>{
    return this.httpClient.delete(this.baseURL+'/'+this.endpoint+'/'+tarefa.id);
  }


}
