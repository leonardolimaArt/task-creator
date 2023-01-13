import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaListarComponent } from './categoria-listar.component';

describe('TarefasListarComponent', () => {
  let component: CategoriaListarComponent;
  let fixture: ComponentFixture<CategoriaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
