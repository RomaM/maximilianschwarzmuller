import {Component, ElementRef, EventEmitter, OnChanges, OnInit, DoCheck, Output, ViewChild, Input} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit, OnChanges, DoCheck {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  @Output() serverDeleted = new EventEmitter<{serverName: string}>();
  @Output() blueprintDeleted = new EventEmitter<{serverName: string}>();

  @Input() receivedValue: number;

  @ViewChild('sayHiListener') sayHiListener: ElementRef;
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    // console.log('Changes');
  }

  ngDoCheck() {
    // console.log('Do Check');
  }

  onSayHiListener(data: {name: string}) {
    this.sayHiListener.nativeElement.textContent = data.name;
  }

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent});
  }

  onRemoveServer() {
    this.serverDeleted.emit({
      serverName: this.newServerName
    });
  }

  onRemoveBlueprint() {
    this.blueprintDeleted.emit({
      serverName: this.newServerName
    });
  }
}
