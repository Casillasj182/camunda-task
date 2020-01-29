import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//These are the routes for getting to the other pages
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';
import {DetailedTaskViewComponent } from './detailed-task-view/detailed-task-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { APP_BASE_HREF } from '@angular/common';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { CurrentDeploymentComponent } from './current-deployment/current-deployment.component';

const routes: Routes = [{ 
  path: 'home', component: HomeComponent },
{ path: 'tasks', component: TasksComponent },
{ path: 'tasks/:term', component: TasksComponent },
{ path: 'detailedtaskview', component: DetailedTaskViewComponent },
{ path: 'taskedit', component: TaskEditComponent },
{path: 'current-deployment', component: CurrentDeploymentComponent},
{ path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' + (window.location.pathname.split('//')[1] || '') }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
