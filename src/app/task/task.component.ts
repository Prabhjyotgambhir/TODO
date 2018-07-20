import { TaskService } from './../services/task.service';
import { Task } from './../models/task';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task: Task;
  taskList: Task[];
  taskFormGroup: FormGroup;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.task = new Task();
    this.taskList = [];
    this.taskFormGroup = new FormGroup({
      name: new FormControl(this.task.name, Validators.required),
      description: new FormControl(this.task.description, Validators.required),
      startDate: new FormControl(this.task.startDate, Validators.required),
      endDate: new FormControl(this.task.endDate, Validators.required)
    });

    this.taskService.getTasks().subscribe(
      (response) => this.taskList = response
    );
  }

  createTask() {
    this.taskService.createTask(this.task).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

}
