import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaService } from '../../categoria.service';
import { categoria } from '../../categoria.model';

@Component({
  selector: 'app-categoria-listar',
  templateUrl: './categoria-listar.component.html',
  styleUrls: ['./categoria-listar.component.scss']
})
export class CategoriaListarComponent implements OnInit {

  tarefas$!: Observable<categoria[]>;
  colunasTabela = ['id', 'titulo', 'descricao']
  constructor(private tarefaService: CategoriaService){}

  ngOnInit(): void {
    this.listarTarefas();
  }

  listarTarefas(){
    this.tarefas$ = this.tarefaService.listar();
  }

}
