import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private ele:ElementRef) { 
    
  }

}
