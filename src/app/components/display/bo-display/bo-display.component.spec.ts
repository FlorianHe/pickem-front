import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoDisplayComponent } from './bo-display.component';

describe('BoDisplayComponent', () => {
  let component: BoDisplayComponent;
  let fixture: ComponentFixture<BoDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
