import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickCreateBlockComponent } from './pick-create-block.component';

describe('PickCreateBlockComponent', () => {
  let component: PickCreateBlockComponent;
  let fixture: ComponentFixture<PickCreateBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickCreateBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickCreateBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
