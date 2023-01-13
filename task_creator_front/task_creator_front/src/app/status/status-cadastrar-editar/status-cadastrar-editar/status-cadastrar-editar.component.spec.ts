import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCadastrarEditarComponent } from './status-cadastrar-editar.component';

describe('TarefaCadastrarEditarComponent', () => {
  let component: StatusCadastrarEditarComponent;
  let fixture: ComponentFixture<StatusCadastrarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusCadastrarEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
