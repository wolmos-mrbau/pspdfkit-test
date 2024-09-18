import { Component, Input } from '@angular/core';

@Component({
  selector: 'aca-pdfpreview',
  templateUrl: './pdfpreview.component.html',
  styleUrls: ['./pdfpreview.component.scss']
})
export class PdfpreviewComponent {
  isPDFFile = true;
  private _dragging : boolean;
  @Input() fileSelectData : string = null;
  @Input() set dragging(val : boolean) {
    this._dragging = val;
    if (val === false) {
      window.dispatchEvent(new Event('resize', {bubbles : true}));
    }
  }
  get dragging(){
    return this._dragging;
  }

  constructor() {

  }


  useViewer : string = 'pspdfkit';
  //useViewer : string = 'browser';

  onViewerChanged(event) {
    if (!event) {
      return;
    }
    this.useViewer = event;
  }

}
