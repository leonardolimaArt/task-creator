import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaCadastrarEditarComponent } from './tarefa-cadastrar-editar.component';

describe('TarefaCadastrarEditarComponent', () => {
  let component: TarefaCadastrarEditarComponent;
  let fixture: ComponentFixture<TarefaCadastrarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarefaCadastrarEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefaCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
