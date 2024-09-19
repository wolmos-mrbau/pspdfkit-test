import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { default as PSPDFKit } from 'pspdfkit';

/* Minimum implementation */
@Component({
  selector: 'aca-pdfpspdfkit',
  templateUrl: './pdfpspdfkit.component.html',
  styleUrls: ['./pdfpspdfkit.component.scss']
})
export class PdfpspdfkitComponent implements OnChanges {
  @Input() fileSelectData : string = null;
  pspdfkitContainer = '#pspdfkit-container';

  ngOnChanges(changes: SimpleChanges) {
    if (changes.fileSelectData) {
      this.onFileSelected();
    }
  }

  private onFileSelected() {
    if (!this.fileSelectData) {
      this.unloadPdf();
      return;
    }

    this.loadPdf(this.fileSelectData);
  }

  unloadPdf() {
    PSPDFKit.unload(this.pspdfkitContainer)
  }

  async loadPdf(url:string) {
    url;
    this.unloadPdf();
    PSPDFKit.load({
      // Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
      useIframe: true,
      baseUrl: location.protocol + "//" + location.host + "/assets/",
      document: url,
      container: this.pspdfkitContainer,
      locale: 'de',
      licenseKey: 'Sh69mMdXLAUmhELBSEziKPwAAYPcAAIrQ2Ojj7EnlHHl2uPhbN6NYX2Xifc4nUMsGFn95_OZJOCGxRoCywLDoD5s7sFhQ9n61C4o7EVJxdj4NlXdntaXItZMtbhrXKiv9BNv8pARGyd7k9I1TSdbNW4OedIhJAsSV1TkXNWDBTeppOxEGIGmhXTPsJprq8uVQ1h949a17hrazC2cnaXI8kh4soot9SVtJESkndJCXr3lfXlO5CAeuWxx4QaI1pYkrOHH1HEwsmUZ3Xoas9-ijgCwgfv5uARueav6b_w05kG-Qb3Oc9paGx-V9rbbZ5oM0cUhtWFz2sRKDnKb-n3TKbBi4AZiyn-GyfdSKD80Zra2C5OOXzo8_DcahcspvlKa1Jhya_WOdvToTYtrtQosqgTn4ioY2s2OmRXw9_w11UMtgiZLKr-sf6F355oQWI1iv6jGyXt4BTZA98jpnpQm27CaC4AWB72_MMJUTEEXwmCrNQmXIjERxuEofhyRWyWjywRQoqQZd0Ywus_am4OYZbC6HbRXS0-_Jt-Mrv1MT_tIZZhG-Y9yF5gWmBPh-1CQ6g1gVuEZf3K_7nTfxDYRjz7ObTfeWB5Vd0EcfJho7B4=',
    }).then(instance => {
      instance;
    });
  }
}
