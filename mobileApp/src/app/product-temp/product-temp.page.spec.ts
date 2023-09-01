import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductTempPage } from './product-temp.page';

describe('ProductTempPage', () => {
  let component: ProductTempPage;
  let fixture: ComponentFixture<ProductTempPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductTempPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
