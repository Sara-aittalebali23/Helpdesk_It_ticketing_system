import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTicketsComponents } from './active-tickets-components';

describe('ActiveTicketsComponents', () => {
  let component: ActiveTicketsComponents;
  let fixture: ComponentFixture<ActiveTicketsComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveTicketsComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveTicketsComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
