import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private ele:ElementRef) { }
   @HostListener('click')
  PrevFun(){
    var Element = this.ele.nativeElement.parentElement.parentElement.children[0];
    var item = Element.getElementsByClassName('item-slider');
    Element.prepend(item[item.length - 1 ]);
    

  }

}
