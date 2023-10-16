import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KdaDisplayComponent } from './kda-display.component';

describe('KdaDisplayComponent', () => {
  let component: KdaDisplayComponent;
  let fixture: ComponentFixture<KdaDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KdaDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KdaDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
