import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanCreateBlockComponent } from './ban-create-block.component';

describe('BanCreateBlockComponent', () => {
  let component: BanCreateBlockComponent;
  let fixture: ComponentFixture<BanCreateBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanCreateBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanCreateBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
