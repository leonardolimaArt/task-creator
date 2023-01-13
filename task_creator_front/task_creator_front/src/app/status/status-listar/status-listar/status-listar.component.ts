import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StatusService } from '../../status.service';
import { status } from '../../status.model';

@Component({
  selector: 'app-status-listar',
  templateUrl: './status-listar.component.html',
  styleUrls: ['./status-listar.component.scss']
})
export class StatusListarComponent implements OnInit {

  tarefas$!: Observable<status[]>;
  colunasTabela = ['id', 'titulo', 'descricao']
  constructor(private tarefaService: StatusService){}

  ngOnInit(): void {
    this.listarTarefas();
  }

  listarTarefas(){
    this.tarefas$ = this.tarefaService.listar();
  }

}
