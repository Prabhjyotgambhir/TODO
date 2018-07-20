import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { TaskService } from './services/task.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatCardModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateTaskComponent } from './create-task/create-task.component'; // to use material bttons
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    WelcomeComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    MatInputModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [TaskService, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
