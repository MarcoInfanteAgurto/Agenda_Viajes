import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buttom } from './buttom';

describe('Buttom', () => {
  let component: Buttom;
  let fixture: ComponentFixture<Buttom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Buttom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Buttom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
