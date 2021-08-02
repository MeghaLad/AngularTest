import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapdetailComponent } from './capdetail.component';

describe('CapdetailComponent', () => {
  let component: CapdetailComponent;
  let fixture: ComponentFixture<CapdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
