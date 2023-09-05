import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryModalPage } from './category-modal.page';

describe('CategoryModalPage', () => {
  let component: CategoryModalPage;
  let fixture: ComponentFixture<CategoryModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoryModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
