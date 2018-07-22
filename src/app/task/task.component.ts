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
  doneList: Task[] = [];
  pendingList: Task[] = [];
  taskDone: Task;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskList = [];
    this.taskService.getTasks().subscribe(
      (taskList) => {
        this.taskList = taskList;
        for (const task of this.taskList) {
          if (task.status === 'done') {
            this.doneList.push(task);
          } else {
            this.pendingList.push(task);
          }
        }
      }
    );
  }

  deleteTask(taskId: any) {
      this.taskService.deleteTask(taskId).subscribe(
      (response) => {
        const task = this.taskList.find((item) => item._id === taskId);
        const index = this.taskList.indexOf(task);
        this.taskList.splice(index , 1);
        this.taskService.openSnackbar('Task Deleted Succesfully');
    },
      (error) => this.taskService.openSnackbar('Error deleting Task') );
  }

  updateTask(task: Task) {
    task.status = 'done';
    this.taskService.updateTask(task).subscribe(
      (response) => {
        if (response.status === 'done') {
          const doneTask = this.taskList.find((item) => item._id === response._id);
          const index = this.taskList.indexOf(doneTask);
          this.taskList.splice(index , 1);
          this.doneList.push(doneTask);
        }
        this.taskService.openSnackbar('Task Updated Succesfully');
      }
    );
  }

}
