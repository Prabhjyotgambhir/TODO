import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  taskFormGroup: FormGroup;
  task: Task;

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
    this.task = new Task();
    this.taskFormGroup = new FormGroup({
      name: new FormControl(this.task.name, Validators.required),
      description: new FormControl(this.task.description, Validators.required),
      startDate: new FormControl(this.task.startDate, Validators.required),
      endDate: new FormControl(this.task.endDate, Validators.required)
    });
  }

  createTask() {
    this.taskService.createTask(this.task).subscribe(
      (response) => {
        alert('New Task Added');
        this.router.navigateByUrl('tasks');
      }
    );
  }

}
