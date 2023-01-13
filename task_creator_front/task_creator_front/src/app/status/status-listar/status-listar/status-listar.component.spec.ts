import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusListarComponent } from './status-listar.component';

describe('TarefasListarComponent', () => {
  let component: StatusListarComponent;
  let fixture: ComponentFixture<StatusListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
