import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TarefaService } from '../../tarefa.service';
import { tarefas } from '../../tarefas.model';
import {FormControl} from '@angular/forms';
import { StatusService } from 'src/app/status/status.service';
import { status } from 'src/app/status/status.model';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { categoria } from 'src/app/categoria/categoria.model';


@Component({
  selector: 'app-tarefas-listar',
  templateUrl: './tarefas-listar.component.html',
  styleUrls: ['./tarefas-listar.component.scss']
})
export class TarefasListarComponent implements OnInit {

  tarefas$!: Observable<tarefas[]>;
  tarefaCat$!: Observable<tarefas[]>;
  tarefaStatus$!: Observable<tarefas[]>;
  estatus!: status[];
  categori!: categoria[];
  
  disableSelect = new FormControl(false);
  colunasTabela = ['id', 'nome', 'descricao', 'dtPrevista', 'dtConclusao', 'categoria', 'status']
  constructor(private tarefaService: TarefaService, private statusService: StatusService, private categoriaService: CategoriaService){}

  ngOnInit(): void {
    this.statusService.listar().subscribe(dados => {this.estatus = dados;});
    this.categoriaService.listar().subscribe(dados => {this.categori = dados;});
    this.tarefas$ = this.tarefaService.listar();
  }

  listarTarefasCat(event: string){
    this.tarefaCat$ = this.tarefaService.pesquisarPorCat(event);
    console.log(event);
  }

  listarTarefasSts(event: string){
    this.tarefaStatus$ = this.tarefaService.pesquisarPorSts(event);
    console.log(event);
  }
}