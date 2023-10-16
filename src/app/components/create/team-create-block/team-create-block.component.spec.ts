import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCreateBlockComponent } from './team-create-block.component';

describe('TeamCreateBlockComponent', () => {
  let component: TeamCreateBlockComponent;
  let fixture: ComponentFixture<TeamCreateBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamCreateBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamCreateBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
