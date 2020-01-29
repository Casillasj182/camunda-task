// Here are all the imports needed to run and use these packages/classes
import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';

// Angular component determines how the component should be processed, instantiated, and used at runtime.
@Component({
  selector: 'app-detailed-task-view',
  templateUrl: './detailed-task-view.component.html',
  styleUrls: ['./detailed-task-view.component.css']
})

export class DetailedTaskViewComponent implements OnInit { // It is called after Angular has initialized all data-bound properties
  
  // Initializing variables and array
  dataSource;
  tasks: any = [];

  // Constructor with instance of Angular HttpClient
  constructor(private httpClient: HttpClient) {}

  // Array of strings full of names we want our columns to be.
  displayedColumns: string[] = ['id', 'name', 'assignee','description','created','due','description','processDefinitionId','processInstanceId'];

  // Function that fetches the json data from the endpoint and HTTP Get request
  getTasks() {
    const apiUrl = 'http://ec2-3-85-111-163.compute-1.amazonaws.com:8080/engine-rest/engine/default/task'; //url of endpoint
    console.log("first",apiUrl); 
    console.log("second",this.httpClient.get(apiUrl))
    return this.httpClient.get(apiUrl);
  }

  // Once Angular is done creating component, it calls getTasks, gets the data and adds it into dataSource
 ngOnInit() {
  this.getTasks().subscribe((data: any[]) => { 
    console.log("here",data); // Data is an array of size 6 for the unique user ids
    this.tasks = data;
    console.log("here also",this.tasks) // Data is an array of size 6 for the unique user ids, same as data
    this.dataSource = new MatTableDataSource(data);// Data source that accepts a client-side data array, it stores the data in dataSource in our instance
  })

}
}

