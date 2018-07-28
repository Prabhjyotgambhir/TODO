import { Task } from './../models/task';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  taskFormGroup: FormGroup;
  constructor( public dialogRef: MatDialogRef<EditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public task: Task, private taskService: TaskService) { }

  ngOnInit() {
    this.taskFormGroup = new FormGroup({
      name: new FormControl(this.task.name, Validators.required),
      description: new FormControl(this.task.description, Validators.required),
      startDate: new FormControl(this.task.startDate, Validators.required),
      endDate: new FormControl(this.task.endDate, Validators.required)
    });
  }

  editTask() {
    this.taskService.updateTask(this.task).subscribe(
      (response) => {
        this.taskService.openSnackbar('Successfully Updated');
        this.dialogRef.close();
      }
    );
  }


  closeDialog() {
    this.dialogRef.close();
  }

  priorityChanged(event: any) {
    this.task.priority = +event.value;
  }

}
