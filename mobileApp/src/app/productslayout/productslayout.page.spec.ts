import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductslayoutPage } from './productslayout.page';

describe('ProductslayoutPage', () => {
  let component: ProductslayoutPage;
  let fixture: ComponentFixture<ProductslayoutPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductslayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
