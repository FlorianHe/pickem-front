import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickBlockComponent } from './pick-block.component';

describe('PickBlockComponent', () => {
  let component: PickBlockComponent;
  let fixture: ComponentFixture<PickBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
