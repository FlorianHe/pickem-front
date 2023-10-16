import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrakeDisplayComponent } from './drake-display.component';

describe('DrakeDisplayComponent', () => {
  let component: DrakeDisplayComponent;
  let fixture: ComponentFixture<DrakeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrakeDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrakeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
