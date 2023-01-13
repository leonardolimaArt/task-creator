import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefaCadastrarEditarRoutingModule } from './status-cadastrar-editar-routing.module';
import { StatusCadastrarEditarComponent } from './status-cadastrar-editar/status-cadastrar-editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    StatusCadastrarEditarComponent
  ],
  imports: [
    CommonModule,
    TarefaCadastrarEditarRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class StatusCadastrarEditarModule { }
