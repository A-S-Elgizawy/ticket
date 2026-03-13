import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Register3 } from './register3';

describe('Register3', () => {
  let component: Register3;
  let fixture: ComponentFixture<Register3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Register3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Register3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
