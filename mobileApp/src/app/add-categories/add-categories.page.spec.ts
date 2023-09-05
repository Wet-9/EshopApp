import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCategoriesPage } from './add-categories.page';

describe('AddCategoriesPage', () => {
  let component: AddCategoriesPage;
  let fixture: ComponentFixture<AddCategoriesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddCategoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
