import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private ele:ElementRef) { 
   
  }
  @HostListener('click')
  nextFun(){
    var Element = this.ele.nativeElement.parentElement.parentElement.children[0];
    var item = Element.getElementsByClassName('item-slider');
    Element.append(item[0]);
    

  }

}
