import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrakePageComponent } from './drake-page.component';

describe('DrakePageComponent', () => {
  let component: DrakePageComponent;
  let fixture: ComponentFixture<DrakePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrakePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrakePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
