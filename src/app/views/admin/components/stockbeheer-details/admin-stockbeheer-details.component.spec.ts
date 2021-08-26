import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStockbeheerDetailsComponent } from './admin-stockbeheer-details.component';

describe('AdminDeleteComponent', () => {
  let component: AdminStockbeheerDetailsComponent;
  let fixture: ComponentFixture<AdminStockbeheerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStockbeheerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStockbeheerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
