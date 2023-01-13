import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefasListarRoutingModule } from './status-listar-routing.module';
import { StatusListarComponent } from './status-listar/status-listar.component';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    StatusListarComponent
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
export class StatusListarModule { }
