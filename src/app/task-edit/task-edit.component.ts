import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { MatTableModule } from '@angular/material'  


@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})

export class TaskEditComponent implements OnInit {
  
  dataSource;
  tasks: any = [];

  constructor(private httpClient: HttpClient) {}

  displayedColumns: string[] = ['type', 'value'];

  

  getTasks() {
    const apiUrl = 'http://ec2-3-85-111-163.compute-1.amazonaws.com:8080/engine-rest/process-instance/:id/variables'; 
    console.log("Here", apiUrl); 
    return this.httpClient.get(apiUrl);
  }

 ngOnInit() {
  this.getTasks().subscribe((data: any[]) => {
    console.log("Here Also", data);
    this.tasks = data;
    console.log(data)
    this.dataSource = new MatTableDataSource(data);
  })

}
}
