import {Directive, ElementRef, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import * as Clipboard from "clipboard";

@Directive({
  selector: '[clipboard]'
})
export class ClipboardDirective {
  clipboard: Clipboard;

  @Input('clipboard')
  elt:ElementRef;

  @Input()
  saldo:string;

  @Output()
  clipboardSuccess:EventEmitter<any> = new EventEmitter();

  @Output()
  clipboardError:EventEmitter<any> = new EventEmitter();

  constructor(private eltRef: ElementRef) {
  }

  ngOnInit() {
    this.clipboard = new Clipboard(this.eltRef.nativeElement, {
      target: () => {
        return this.elt.nativeElement;
      },
      text: () => {
        return (this.saldo.replace(' ','').replace('-', ''));
      }
    });

    this.clipboard.on('success', (e) => {
      this.clipboardSuccess.emit();
    });

    this.clipboard.on('error', (e) => {
      this.clipboardError.emit();
    });
  }

  ngOnDestroy() {
    if (this.clipboard) {
      this.clipboard.destroy();
    }
  }
}
