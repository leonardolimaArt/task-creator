import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusService } from '../../status.service';
import { status } from '../../status.model';

@Component({
  selector: 'app-tarefa-cadastrar-editar',
  templateUrl: './status-cadastrar-editar.component.html',
  styleUrls: ['./status-cadastrar-editar.component.scss']
})
export class StatusCadastrarEditarComponent implements OnInit{

  formGroup!: FormGroup;
  tarefa!: status;

  constructor(private formBuilder: FormBuilder,
     private tarefaService: StatusService,
      private router: Router,
      private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.tarefa = this.activatedRoute.snapshot.data["tarefa"];
    this.formGroup = this.formBuilder.group({
      id:[(this.tarefa && this.tarefa.id) ? this.tarefa.id: null],
      titulo: [(this.tarefa && this.tarefa.titulo) ? this.tarefa.titulo: "", Validators.required],
      descricao: [(this.tarefa && this.tarefa.descricao) ? this.tarefa.descricao: "", Validators.required]
    })
  }

  salvar(){

    if(this.tarefa && this.tarefa.id){
      this.tarefaService.atualizar(this.formGroup.value).subscribe(
        itemAtualizado => {
          this.router.navigateByUrl("/status");
        },
        error => {
          alert("Erro ao atualizar" + JSON.stringify(error));
        }
      )
    } else {
      this.tarefaService.cadastrar(this.formGroup.value).subscribe(
        tarefaCadastada => {
            this.router.navigateByUrl("/status");
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
          this.router.navigateByUrl("/status");
        },
        error => {
          alert("Erro ao deletar" + JSON.stringify(error));
        }
      )
    }
  }
}
