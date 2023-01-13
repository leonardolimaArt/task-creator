import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from '../../tarefa.service';
import { tarefas } from '../../tarefas.model';
import { status } from 'src/app/status/status.model';
import { StatusService } from 'src/app/status/status.service';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { categoria } from 'src/app/categoria/categoria.model';
import { CategoriaService } from 'src/app/categoria/categoria.service';
@Component({
  selector: 'app-tarefa-cadastrar-editar',
  templateUrl: './tarefa-cadastrar-editar.component.html',
  styleUrls: ['./tarefa-cadastrar-editar.component.scss']
})

export class TarefaCadastrarEditarComponent implements OnInit{

  estatus!: status[];
  categori!: categoria[];
  formGroup!: FormGroup;
  tarefa!: tarefas;

  constructor(private formBuilder: FormBuilder,
     private tarefaService: TarefaService,
      private router: Router,
      private activatedRoute: ActivatedRoute, private statusService: StatusService, public datepipe: DatePipe, private categoriaService: CategoriaService){}

  ngOnInit(){
    this.statusService.listar().subscribe(dados => {this.estatus = dados;});
    this.categoriaService.listar().subscribe(dados => {this.categori = dados;});
    this.tarefa = this.activatedRoute.snapshot.data["tarefa"];

    this.formGroup = this.formBuilder.group({
      id:[(this.tarefa && this.tarefa.id) ? this.tarefa.id: null],
      titulo: [(this.tarefa && this.tarefa.titulo) ?  this.tarefa.titulo: "", Validators.required],
      descricao: [(this.tarefa && this.tarefa.descricao) ? this.tarefa.descricao: "", Validators.required],
      dtPrevista: [(this.tarefa && this.tarefa.dtPrevista) ? this.tarefa.dtPrevista: "", Validators.required],
      dtConclusao: [(this.tarefa && this.tarefa.dtConclusao) ? this.tarefa.dtConclusao: "", Validators.required],
      idCategoria: [(this.tarefa && this.tarefa.idCategoria) ? this.tarefa.idCategoria: "", Validators.required],
      idStatus: [(this.tarefa && this.tarefa.idStatus) ? this.tarefa.titulo: "", Validators.required]
    })
  }

  salvar(){

    if(this.tarefa && this.tarefa.id){
      this.tarefaService.atualizar(this.formGroup.value).subscribe(
        itemAtualizado => {
          this.router.navigateByUrl("/tarefas");
        },
        error => {
          alert("Erro ao atualizar" + JSON.stringify(error));
        }
      )
    } else {
      this.tarefaService.cadastrar(this.formGroup.value).subscribe(
        tarefaCadastada => {
            this.router.navigateByUrl("/tarefas");
        },
        error => {
          alert("Erro ao cadastrar" + JSON.stringify(error));
        }
      )
    }
  }

  deletar(){

    if(confirm("Deseja deletar o item" + this.tarefa.titulo)){
      this.tarefaService.deletar(this.tarefa).subscribe(
        response => {
          this.router.navigateByUrl("/tarefas");
        },
        error => {
          alert("Erro ao deletar" + JSON.stringify(error));
        }
      )
    }
  }
}
