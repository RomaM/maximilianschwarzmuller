import {ContentChild, Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor (private el: ElementRef, private renderer: Renderer2) {}

  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;

    const dropdownList = this.el.nativeElement.querySelector('.dropdown-menu');
    this.isOpen ? this.renderer.addClass(dropdownList, 'show')
        : this.renderer.removeClass(dropdownList, 'show');
  }
}
