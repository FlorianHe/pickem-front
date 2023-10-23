import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinrateBlockComponent } from './winrate-block.component';

describe('WinrateBlockComponent', () => {
  let component: WinrateBlockComponent;
  let fixture: ComponentFixture<WinrateBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinrateBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinrateBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
