import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrakeSelectComponent } from './drake-select.component';

describe('DrakeSelectComponent', () => {
  let component: DrakeSelectComponent;
  let fixture: ComponentFixture<DrakeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrakeSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrakeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
