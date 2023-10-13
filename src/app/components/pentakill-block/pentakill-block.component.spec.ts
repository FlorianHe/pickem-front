import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PentakillBlockComponent } from './pentakill-block.component';

describe('PentakillBlockComponent', () => {
  let component: PentakillBlockComponent;
  let fixture: ComponentFixture<PentakillBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PentakillBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PentakillBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
