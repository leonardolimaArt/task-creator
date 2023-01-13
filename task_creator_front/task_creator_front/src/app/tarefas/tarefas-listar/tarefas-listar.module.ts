import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefasListarRoutingModule } from './tarefas-listar-routing.module';
import { TarefasListarComponent } from './tarefas-listar/tarefas-listar.component';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    TarefasListarComponent
  ],
  imports: [
    CommonModule,
    TarefasListarRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatInputModule
  ]
})
export class TarefasListarModule { }
