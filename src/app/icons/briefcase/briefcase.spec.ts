import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Briefcase } from './briefcase';

describe('Briefcase', () => {
  let component: Briefcase;
  let fixture: ComponentFixture<Briefcase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Briefcase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Briefcase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
