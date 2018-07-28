import { Router } from '@angular/router';
import { TaskService } from './../services/task.service';
import { Task } from './../models/task';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { CookieService } from 'ngx-cookie-service';

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
  constructor(private taskService: TaskService, private dialog: MatDialog, private cookieService: CookieService, private router: Router) { }

  ngOnInit() {

    // if (!this.cookieService.get('token')) {
    //   this.router.navigateByUrl('signup');
    // }

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

  deleteTask(taskId: any, status: string) {
    this.taskService.deleteTask(taskId).subscribe(
      (response) => {
        if (status === 'done') {
          const task = this.doneList.find((item) => item._id === taskId);
          const index = this.doneList.indexOf(task);
          this.doneList.splice(index, 1);
        } else {
          const task = this.pendingList.find((item) => item._id === taskId);
          const index = this.pendingList.indexOf(task);
          this.pendingList.splice(index, 1);
        }
        this.taskService.openSnackbar('Task Deleted Succesfully');
      },
      (error) => this.taskService.openSnackbar('Error deleting Task'));
  }

  updateTask(task: Task) {
    task.status = 'done';
    this.taskService.updateTask(task).subscribe(
      (response) => {
        if (response.status === 'done') {
          const doneTask = this.pendingList.find((item) => item._id === response._id);
          const index = this.pendingList.indexOf(doneTask);
          this.pendingList.splice(index, 1);
          this.doneList.push(doneTask);
        }
        this.taskService.openSnackbar('Task Updated Succesfully');
      }
    );
  }

  undoTask(task: Task) {
    task.status = 'pending';
    this.taskService.updateTask(task).subscribe(
      (response) => {
        if (response.status === 'pending') {
          const pendingTask = this.doneList.find((item) => item._id === response._id);
          const index = this.doneList.indexOf(pendingTask);
          this.doneList.splice(index, 1);
          this.pendingList.push(pendingTask);
        }
        this.taskService.openSnackbar('Task Updated Succesfully');
      }
    );
  }

  // What is the use of this method, I even removed the html binding but nothing broke
  getTaskList(event) {
    // reason for the condition ??
    if (event.index === 0) {
      this.taskService.getTasks().subscribe(
        (taskList) => {
          this.taskList = taskList;
        }
      );
    }
    }

    editTask(task: Task) {
      const dialogRef = this.dialog.open(EditTaskComponent, {
        width: '250px',
        data: task
      });
    }

}
