import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarEnderecoComponent } from './buscar-endereco.component';

describe('BuscarEnderecoComponent', () => {
  let component: BuscarEnderecoComponent;
  let fixture: ComponentFixture<BuscarEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarEnderecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
