import { SignupComponent } from './signup/signup.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskComponent } from './task/task.component';
import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent},
    { path: 'tasks', component: TaskComponent },
    { path: 'new', component: CreateTaskComponent },
    { path: 'signup', component: SignupComponent }
];
