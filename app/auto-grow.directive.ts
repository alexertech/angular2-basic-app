import {Directive,ElementRef,Renderer} from 'angular2/core'

// [refer to an atribute]
// host suscribe this directive to an host
@Directive ({
  selector: '[autoGrow]',
  host:{
    '(focus)' : 'onFocus()',
    '(blur)' : 'onBlur()',
  }
})

// el and renderer will be avaialbe due dependency injection
export class AutoGrowDirective{
  // _ private
  // _el : ElementRef;
  constructor(private el: ElementRef, private renderer: Renderer){}
  onFocus() {
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '200px');
  }
  onBlur(){
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '120px');
  }
}
