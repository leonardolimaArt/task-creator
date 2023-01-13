import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaCadastrarEditarComponent } from './categoria-cadastrar-editar.component';

describe('TarefaCadastrarEditarComponent', () => {
  let component: CategoriaCadastrarEditarComponent;
  let fixture: ComponentFixture<CategoriaCadastrarEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaCadastrarEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
