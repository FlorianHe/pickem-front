import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCreateBlockComponent } from './player-create-block.component';

describe('PlayerCreateBlockComponent', () => {
  let component: PlayerCreateBlockComponent;
  let fixture: ComponentFixture<PlayerCreateBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerCreateBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerCreateBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
