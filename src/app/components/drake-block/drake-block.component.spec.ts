import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrakeBlockComponent } from './drake-block.component';

describe('DrakeBlockComponent', () => {
  let component: DrakeBlockComponent;
  let fixture: ComponentFixture<DrakeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrakeBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrakeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
