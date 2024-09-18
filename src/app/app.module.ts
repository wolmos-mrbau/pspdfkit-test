import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { SplitpaneComponent } from './splitpane/splitpane.component';
import { PdfpreviewComponent } from './pdfpreview/pdfpreview.component';
import { PdfpspdfkitComponent } from './pdfpspdfkit/pdfpspdfkit.component';
import { PdfbrowserComponent } from './pdfbrowser/pdfbrowser.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    SplitpaneComponent,
    PdfpreviewComponent,
    PdfpspdfkitComponent,
    PdfbrowserComponent,

  ],
  imports: [
    BrowserModule,
    AngularSplitModule,
    NoopAnimationsModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
