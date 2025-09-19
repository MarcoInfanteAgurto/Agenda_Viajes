import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDestino } from './card-destino';

describe('CardDestino', () => {
  let component: CardDestino;
  let fixture: ComponentFixture<CardDestino>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDestino]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDestino);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
