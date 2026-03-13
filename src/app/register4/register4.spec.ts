import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Register4 } from './register4';

describe('Register4', () => {
  let component: Register4;
  let fixture: ComponentFixture<Register4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Register4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Register4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
