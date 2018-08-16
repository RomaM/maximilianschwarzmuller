import {Component, OnInit, DoCheck, Input, Output, ViewChild, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss']
})
export class ServerElementComponent implements OnInit, DoCheck {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('sayHi') sayHiData;
  @Output() sayHiEvent = new EventEmitter<{sayHiData: string}>();

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
  }

  onSayHi() {
    // console.log(this.sayHiData.nativeElement.value);
    this.sayHiEvent.emit({sayHiData: this.sayHiData.nativeElement.value});
  }

}
