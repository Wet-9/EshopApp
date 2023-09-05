import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditCategoryModalPage } from './edit-category-modal.page';

describe('EditCategoryModalPage', () => {
  let component: EditCategoryModalPage;
  let fixture: ComponentFixture<EditCategoryModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditCategoryModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
