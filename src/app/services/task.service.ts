import { Task } from './../models/task';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class TaskService {

  constructor(private http: Http, private snackbar: MatSnackBar) { }

  // createTask(): Observable<Task> {
  //   return this.http.get('http://localhost:1100').map((res) => {
  //     return res.json()
  //   }).catch((error) => return error.json());

    createTask(task: Task): Observable < Task > {
      return this.http.post('http://localhost:1100/tasks', task)
        .map((res) => {
          return res.json();
        });
    }

    getTasks(): Observable <Task[]> {
      return this.http.get('http://localhost:1100/tasks')
        .map((res) => {
          return res.json();
        });
    }

    deleteTask(taskID: any): Observable <Task> {
      return this.http.delete('http://localhost:1100/tasks/' + taskID)
      .map((res) => {
        return res.json();
      });
    }

    openSnackbar(message: string) {
      this.snackbar.open(message, '', {
        duration: 2000,
      });
    }
  }

