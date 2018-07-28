import { HttpClient } from '@angular/common/http';
import { Task } from './../models/task';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class TaskService {

  constructor(private http: HttpClient, private snackbar: MatSnackBar) { }

    createTask(task: Task): Observable < Task > {
      return this.http.post<Task>('http://localhost:1100/tasks', task);
    }

    getTasks(): Observable <Task[]> {
      return this.http.get<Task[]>('http://localhost:1100/tasks')
        .map((res) => {
          return res;
        });
    }

    updateTask(task: Task): Observable <Task> {
      return this.http.put<Task>('http://localhost:1100/tasks/' + task._id , task)
      .map((res) => {
        return res;
      });
    }

    deleteTask(taskId: any): Observable <Task> {
      return this.http.delete<Task>('http://localhost:1100/tasks/' + taskId)
      .map((res) => {
        return res;
      });
    }

    openSnackbar(message: string) {
      this.snackbar.open(message, '', {
        duration: 2000,
      });
    }

  }

