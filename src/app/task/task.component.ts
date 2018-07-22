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
      (taskList) => this.taskList = taskList
    );
  }

  deleteTask(taskId: any) {
    this.taskService.deleteTask(taskId).subscribe(
      (response) => {
        const task = this.taskList.find((item) => item.id === taskId);
        // this.taskList.splice(task , 1);
        this.taskService.openSnackbar('Task Deleted Succesfully')
    },
      (error) => this.taskService.openSnackbar('Error deleting Task') );
  }

}
