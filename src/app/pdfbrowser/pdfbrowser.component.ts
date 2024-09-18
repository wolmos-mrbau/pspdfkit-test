import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'aca-pdfbrowser',
  templateUrl: './pdfbrowser.component.html',
  styleUrls: ['./pdfbrowser.component.scss']
})
export class PdfbrowserComponent implements OnChanges {
  @Input() fileSelectData : string = null;
  SHOW_TOOLBAR : string = "#toolbar=1";
  useIframe: boolean;
  sanitized_document_url: SafeResourceUrl | null = null;

  constructor(
    private deviceService: DeviceDetectorService,
    private sanitizer: DomSanitizer,
  ) {
    this.useIframe = this.deviceService.browser != 'Firefox';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.fileSelectData) {
      this.onFileSelected();
      console.log('on Changes');
    }
  }

  private onFileSelected() {
    if (!this.fileSelectData) {
      this.sanitized_document_url = null;
      return;
    }

    this.loadUrl(this.fileSelectData);
  }

  loadUrl(fileUrl : string)
  {
    if (fileUrl == null)
    {
      this.sanitized_document_url = null;
    }
    else {
      this.sanitized_document_url = this.sanitizeUrl(fileUrl);
    }
  }

  private sanitizeUrl(url:string) : SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
