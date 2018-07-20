import { Task } from './../models/task';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {

  constructor(private http: Http) { }

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
  }

