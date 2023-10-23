import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanBlockComponent } from './ban-block.component';

describe('BanBlockComponent', () => {
  let component: BanBlockComponent;
  let fixture: ComponentFixture<BanBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
