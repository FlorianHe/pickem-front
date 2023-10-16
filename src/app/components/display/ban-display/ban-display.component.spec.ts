import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanDisplayComponent } from './ban-display.component';

describe('BanDisplayComponent', () => {
  let component: BanDisplayComponent;
  let fixture: ComponentFixture<BanDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
