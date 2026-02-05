import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponents } from './users-components';

describe('UsersComponents', () => {
  let component: UsersComponents;
  let fixture: ComponentFixture<UsersComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
