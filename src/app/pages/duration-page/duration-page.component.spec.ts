import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationPageComponent } from './duration-page.component';

describe('DurationPageComponent', () => {
  let component: DurationPageComponent;
  let fixture: ComponentFixture<DurationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DurationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DurationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
