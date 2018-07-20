import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskComponent } from './task/task.component';
import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    { path: '', component: WelcomeComponent},
    { path: 'tasks', component: TaskComponent },
    { path: 'new', component: CreateTaskComponent }
];
