import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {
  @Output() clickEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(value:string) {
    this.clickEvent.emit(value);
  }
}
