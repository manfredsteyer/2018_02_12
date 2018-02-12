import { Directive, Output, EventEmitter, Input, HostListener, ElementRef, Renderer, OnInit, HostBinding } from '@angular/core';
import { NgControl } from '@angular/forms';

// <button (clickWithWarning)="doItBaby()" warning="Are your really sure?">
@Directive({
    selector: '[clickWithWarning]'  // AttributeDirective
})
export class ClickWithWarningDirective implements OnInit {

    @Input() warning: string = 'Are you sure?';
    @Output() clickWithWarning = new EventEmitter();

    constructor(private elementRef: ElementRef, private renderer: Renderer) {
    }

    ngOnInit() {
        // Warnung: Direkter DOM-Zugriff!
        // this.elementRef.nativeElement.setAttribute('class', 'btn btn-danger');
        // Indirekter DOM-Zugriff über Renderer
        // this.renderer.setElementAttribute(this.elementRef.nativeElement, 'class', 'btn btn-danger');
        this.cssClass = 'btn btn-danger';
    }

    @HostBinding('class') cssClass: string;

    @HostListener('click', ['$event'])
    handleClick($event): void {
        console.log('handleClick', $event);
        if (confirm(this.warning)) {
            this.clickWithWarning.emit();
        }
    }



    /*
    @HostListener('click', ['$event', '$event.shiftKey'])
    handleClick($event, shiftKey): void {
        console.log('handleClick', $event);
        if (shiftKey || confirm(this.warning)) {
            this.flightClickWithWarning.emit();
        }
    }
    */

}
