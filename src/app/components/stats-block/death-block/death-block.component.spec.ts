import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathBlockComponent } from './death-block.component';

describe('DeathBlockComponent', () => {
  let component: DeathBlockComponent;
  let fixture: ComponentFixture<DeathBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeathBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
