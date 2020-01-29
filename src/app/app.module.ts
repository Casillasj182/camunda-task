import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailedTaskViewComponent } from './detailed-task-view/detailed-task-view.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { MatTabsModule } from '@angular/material';
import {SearchService} from './tasks/tasks.component';
import { CurrentDeploymentComponent } from './current-deployment/current-deployment.component';


@NgModule({
  imports:      
  [
  
    MatMenuModule,  HttpClientJsonpModule, MatToolbarModule,MatTabsModule,
  FormsModule, HttpClientModule, BrowserAnimationsModule, MatTableModule, MatIconModule, 
  MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatListModule, 
  MatButtonToggleModule, MatBadgeModule, BrowserModule, NgbModule, AppRoutingModule],

  declarations: [ AppComponent, TasksComponent, HomeComponent, PageNotFoundComponent, DetailedTaskViewComponent, TaskEditComponent, CurrentDeploymentComponent ],

  bootstrap:    [ AppComponent ],
   providers: [SearchService]
})

export class AppModule { }




