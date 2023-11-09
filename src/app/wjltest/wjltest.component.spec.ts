import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WjltestComponent } from './wjltest.component';
import { By } from '@angular/platform-browser';

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

  it('should increase number when call onIncrease', ()=>{
    component.number = 2;

    component.onIncrease();

    expect(component.number).toBe(3);
  })

  it('should increase number when click increase button', () => {
    component.number = 2;

    fixture.debugElement.query(By.css('button')).triggerEventHandler('click');
    fixture.detectChanges()

    const text = fixture.debugElement.query(By.css('span')).nativeElement.textContent;
    expect(text).toEqual('number: 3');
  })

  it('should isShowIncreaseButton be true when number <= 10', () => {
      component.number = 2;

      expect(component.isShowIncreaseButton).toBeTrue();
  })
});
