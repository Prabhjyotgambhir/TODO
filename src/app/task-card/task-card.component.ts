import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteTask = new EventEmitter();
  @Output() updateTask = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  invokeDelete() {
    this.deleteTask.emit();
  }

  invokeUpdate() {
    this.updateTask.emit();
  }

}
