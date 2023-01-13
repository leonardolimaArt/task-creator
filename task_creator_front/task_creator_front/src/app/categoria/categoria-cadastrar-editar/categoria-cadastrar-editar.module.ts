import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefaCadastrarEditarRoutingModule } from './categoria-cadastrar-editar-routing.module';
import { CategoriaCadastrarEditarComponent } from './categoria-cadastrar-editar/categoria-cadastrar-editar.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CategoriaCadastrarEditarComponent
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
export class CategoriaCadastrarEditarModule { }
