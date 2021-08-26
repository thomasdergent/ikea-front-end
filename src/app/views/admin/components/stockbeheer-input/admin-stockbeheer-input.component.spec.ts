import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStockbeheerInputComponent } from './admin-stockbeheer-input.component';

describe('AdminDeleteComponent', () => {
  let component: AdminStockbeheerInputComponent;
  let fixture: ComponentFixture<AdminStockbeheerInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStockbeheerInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStockbeheerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
