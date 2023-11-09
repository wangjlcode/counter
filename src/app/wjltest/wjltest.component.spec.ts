import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WjltestComponent } from './wjltest.component';

describe('WjltestComponent', () => {
  let component: WjltestComponent;
  let fixture: ComponentFixture<WjltestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WjltestComponent]
    });
    fixture = TestBed.createComponent(WjltestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
