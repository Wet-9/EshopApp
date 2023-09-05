import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminProductsPage } from './admin-products.page';

describe('AdminProductsPage', () => {
  let component: AdminProductsPage;
  let fixture: ComponentFixture<AdminProductsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
