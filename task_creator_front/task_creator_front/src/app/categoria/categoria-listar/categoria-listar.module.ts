import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefasListarRoutingModule } from './categoria-listar-routing.module';
import { CategoriaListarComponent } from './categoria-listar/categoria-listar.component';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    CategoriaListarComponent
  ],
  imports: [
    CommonModule,
    TarefasListarRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class CategoriaListarModule { }
