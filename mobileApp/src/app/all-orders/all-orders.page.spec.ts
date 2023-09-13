import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllOrdersPage } from './all-orders.page';

describe('AllOrdersPage', () => {
  let component: AllOrdersPage;
  let fixture: ComponentFixture<AllOrdersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllOrdersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
