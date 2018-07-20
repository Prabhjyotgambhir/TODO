import { TaskService } from './../services/task.service';
import { Task } from './../models/task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  taskList: Task[];
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskList = [];
    this.taskService.getTasks().subscribe(
      (response) => this.taskList = response
    );
  }

}
