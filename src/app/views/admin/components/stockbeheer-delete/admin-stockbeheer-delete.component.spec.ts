import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStockbeheerDeleteComponent } from './admin-stockbeheer-delete.component';

describe('AdminDeleteComponent', () => {
  let component: AdminStockbeheerDeleteComponent;
  let fixture: ComponentFixture<AdminStockbeheerDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStockbeheerDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStockbeheerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
