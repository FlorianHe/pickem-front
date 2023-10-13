import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PentakillPageComponent } from './pentakill-page.component';

describe('PentakillPageComponent', () => {
  let component: PentakillPageComponent;
  let fixture: ComponentFixture<PentakillPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PentakillPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PentakillPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
