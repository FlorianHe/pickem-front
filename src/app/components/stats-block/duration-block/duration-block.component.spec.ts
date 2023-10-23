import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationBlockComponent } from './duration-block.component';

describe('DurationBlockComponent', () => {
  let component: DurationBlockComponent;
  let fixture: ComponentFixture<DurationBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DurationBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DurationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
