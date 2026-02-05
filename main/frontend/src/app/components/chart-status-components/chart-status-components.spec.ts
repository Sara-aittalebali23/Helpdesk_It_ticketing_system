import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStatusComponents } from './chart-status-components';

describe('ChartStatusComponents', () => {
  let component: ChartStatusComponents;
  let fixture: ComponentFixture<ChartStatusComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartStatusComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartStatusComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
