import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasListarComponent } from './tarefas-listar.component';

describe('TarefasListarComponent', () => {
  let component: TarefasListarComponent;
  let fixture: ComponentFixture<TarefasListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarefasListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
