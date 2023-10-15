import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrakeCreateBlockComponent } from './drake-create-block.component';

describe('DrakeCreateBlockComponent', () => {
  let component: DrakeCreateBlockComponent;
  let fixture: ComponentFixture<DrakeCreateBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrakeCreateBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrakeCreateBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
