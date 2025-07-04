import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFocus } from './team-focus';

describe('TeamFocus', () => {
  let component: TeamFocus;
  let fixture: ComponentFixture<TeamFocus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamFocus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamFocus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
