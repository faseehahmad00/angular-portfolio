import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioContainer } from './portfolio-container';

describe('PortfolioContainer', () => {
  let component: PortfolioContainer;
  let fixture: ComponentFixture<PortfolioContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
