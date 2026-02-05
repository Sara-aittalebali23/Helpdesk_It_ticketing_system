import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepportsComponents } from './repports-components';

describe('RepportsComponents', () => {
  let component: RepportsComponents;
  let fixture: ComponentFixture<RepportsComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepportsComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepportsComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
