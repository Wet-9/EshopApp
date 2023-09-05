import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProductsPage } from './add-products.page';

describe('AddProductsPage', () => {
  let component: AddProductsPage;
  let fixture: ComponentFixture<AddProductsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
