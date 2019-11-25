import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  tasks = [];

  @Output()
  eventTask = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  select(task: string) {
    this.eventTask.emit(task);
  }

}
