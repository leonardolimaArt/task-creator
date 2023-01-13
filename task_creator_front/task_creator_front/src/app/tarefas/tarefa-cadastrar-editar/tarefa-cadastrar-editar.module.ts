import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { TarefaCadastrarEditarRoutingModule } from './tarefa-cadastrar-editar-routing.module';
import { TarefaCadastrarEditarComponent } from './tarefa-cadastrar-editar/tarefa-cadastrar-editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    TarefaCadastrarEditarComponent
  ],
  imports: [
    CommonModule,
    TarefaCadastrarEditarRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DatePipe
  ]
})
export class TarefaCadastrarEditarModule { }
