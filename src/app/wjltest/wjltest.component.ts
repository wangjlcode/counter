import { Component } from '@angular/core';

@Component({
  selector: 'app-wjltest',
  templateUrl: './wjltest.component.html',
  styleUrls: ['./wjltest.component.css']
})
export class WjltestComponent {

  number = 0;
  onIncrease(){
    this.number++;
  }
  onDecrease() {
    this.number--;
  }

  onReset(){
    this.number = 0;
  }

  get isShowIncreaseButton(){
    return this.number <= 10;
  }
  get isShowDereaseButton(){
    return this.number >=0;
  }

  get textBackGroundColor(){
    if (this.number > 10){
      return 'red'
    }
    if (this.number < 0){
      return 'green'
    }
    return ''
  }
}
