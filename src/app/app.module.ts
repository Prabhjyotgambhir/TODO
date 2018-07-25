import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { TaskService } from './services/task.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatCardModule, MatInputModule, MatDatepickerModule, MatGridListModule,
  MatNativeDateModule, MatSnackBarModule, MatIconModule, MatTabsModule, MatDialogModule } from '@angular/material';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateTaskComponent } from './create-task/create-task.component'; // to use material bttons
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskCardComponent } from './task-card/task-card.component';
import { EditTaskComponent } from './edit-task/edit-task.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    WelcomeComponent,
    CreateTaskComponent,
    TaskCardComponent,
    EditTaskComponent
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
    MatNativeDateModule,
    MatSnackBarModule,
    MatGridListModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule
  ],
  entryComponents: [
    EditTaskComponent
  ],
  providers: [TaskService, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
