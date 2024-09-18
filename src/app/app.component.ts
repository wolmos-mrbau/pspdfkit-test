import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dragging = false;
  fileSelectData = "assets/test.pdf";
  dragStartEvent(){
    // workaround: hide pdf viewer during split pane resize
    this.dragging = true;
  }

  dragEndEvent(){
    // workaround: restore pdf viewer after split pane resize
    this.dragging = false;
  }

}
