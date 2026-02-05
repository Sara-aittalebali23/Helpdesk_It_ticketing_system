import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPriorityComponents } from './chart-priority-components';

describe('ChartPriorityComponents', () => {
  let component: ChartPriorityComponents;
  let fixture: ComponentFixture<ChartPriorityComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartPriorityComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartPriorityComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
