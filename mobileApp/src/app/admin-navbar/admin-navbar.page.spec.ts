import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminNavbarPage } from './admin-navbar.page';

describe('AdminNavbarPage', () => {
  let component: AdminNavbarPage;
  let fixture: ComponentFixture<AdminNavbarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminNavbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
