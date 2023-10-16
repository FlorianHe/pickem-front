import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideCreateBlockComponent } from './side-create-block.component';

describe('SideCreateBlockComponent', () => {
  let component: SideCreateBlockComponent;
  let fixture: ComponentFixture<SideCreateBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideCreateBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideCreateBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
