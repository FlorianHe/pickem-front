import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KdaBlockComponent } from './kda-block.component';

describe('KdaBlockComponent', () => {
  let component: KdaBlockComponent;
  let fixture: ComponentFixture<KdaBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KdaBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KdaBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
