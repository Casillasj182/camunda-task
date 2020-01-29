import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import {ActivatedRoute } from "@angular/router";
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-current-deployment',
  templateUrl: './current-deployment.component.html',
  styleUrls: ['./current-deployment.component.css']
})

export class CurrentDeploymentComponent implements OnInit {
  
  dataSource;
  dataSource2;
  value1: string;
  value2: string;
  temp;
 

  private loading: boolean = false;
  tasks: any = [];
  tasks2: any = [];
  final: any=[];


  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {}
 
  displayedColumns: string[] = ['id', 'name', 'deploymentTime','count'];
  

  getDeployments() {
    const ApiUrl = 'http://ec2-3-85-111-163.compute-1.amazonaws.com:8080/engine-rest/engine/default/deployment'; 
    return this.httpClient.get(ApiUrl);
  }

 // This is the rest call to get the final count depending on the deployment Id passed, total should be 3
  getInstanceCount(temp){
    const Url= 'http://ec2-3-85-111-163.compute-1.amazonaws.com:8080/engine-rest/engine/default/process-definition/count?deploymentId=' + temp;
    return this.httpClient.get(Url);
  }


  ngOnInit() { 

  this.getDeployments().subscribe((data: any[]) => {
    this.tasks = data;
    this.dataSource=data;
    this.dataSource = new MatTableDataSource(data);


    //This grabs the first value we need from the rest call
    this.value1=data[0]['id'];
    // console.log("First Deployment ID",this.value1);


     //This grabs the second value we need from the rest call
     this.value2=data[1]['id'];
    //  console.log("Second Deployment ID",this.value2);


    // Calling second rest call that will get me the count
     this.getInstanceCount(this.value1).subscribe((data2: any[])=> {
       console.log("1", this.value1);
       this.tasks = data2;
       this.dataSource2=data2;
       this.dataSource2 = new MatTableDataSource(data2);
       
     })


      // Calling second rest call that will get me the count
      this.getInstanceCount(this.value2).subscribe((data2: any[])=> {
        console.log("2", this.value2);
        this.tasks = data2;
        this.dataSource2=data2;
        this.dataSource2 = new MatTableDataSource(data2);
       
      })
      

  
  })
}


}

