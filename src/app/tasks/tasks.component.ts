import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  
  dataSource;
  private loading: boolean = false;
  tasks: any = [];
//--------------------------------------------------------------------------------------------------------------------------------------
  constructor(private httpClient: HttpClient,private route: ActivatedRoute,private itunes: SearchService, private router: Router) {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params["term"]) {
        this.doSearch(params["term"]);
      }
    });
  }
 //--------------------------------------------------------------------------------------------------------------------------------------
  displayedColumns: string[] = ['processInstanceId', 'name', 'description','assignee'];

  getTasks() {
    const ApiUrl = 'http://ec2-3-85-111-163.compute-1.amazonaws.com:8080/engine-rest/engine/default/task'; 
    return this.httpClient.get(ApiUrl);
  }

  // This might be able to replace the search function, we just need to pass in the id value which will be added to the 
  // end of the url which will complete the rest call
  // I still need to make sure the rest call works well and retrieves the information.
  getData(id: string) {
    const ApiUrl2 = "http://ec2-3-85-111-163.compute-1.amazonaws.com:8080/engine-rest/engine/default/process-instance"+'/'+id; 
    return this.httpClient.get(ApiUrl2);
  }

  doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term).then(_ => (this.loading = false));
  }

  onSearch(term: string) {
    this.router.navigate(["task", { term: term }]);
  }
  



 ngOnInit() { 
  this.getTasks().subscribe((data: any[]) => {
    this.tasks = data;
    this.dataSource=data;
    console.log("Here is the first rest call", this.dataSource);
  })
  this.getData().subscribe((data: any[]) => {
    this.tasks = data;
    this.dataSource=data;
    console.log("Here is the second rest call", this.dataSource);

  })
 
}

}

class SearchItem {
  constructor(public definitionId: string) {}
}

@Injectable()
export class SearchService {
  // apiRoot: string = "http://ec2-3-85-111-163.compute-1.amazonaws.com:8080/engine-rest/engine/default/process-instance";
  apiRoot: string = 'http://ec2-3-85-111-163.compute-1.amazonaws.com:8080/engine-rest/engine/default/task'; 
  results: SearchItem[]; 

  constructor(private http: HttpClient) {
    this.results = [];
  }

//   search(term: string) {
//     console.log("Here yet?")
//     return new Promise((resolve, reject) => {
//       this.results = [];
//       // let apiURL = `${this.apiRoot}/${term}`;
//       let apiURL = this.apiRoot;
//       // let apiURL=this.apiRoot;
//       console.log("Current URL is", apiURL)
//       this.http.jsonp(apiURL, "callback").toPromise().then(res => { this.results = res.results.map(item => 
//         {return new SearchItem(item.id);
//         });
//             resolve();
//           }, 
//           msg => {
//             // Error
//              reject(msg);
//              console.log("Error HEre",msg);
//           } 
//         );
//     });
//   }
// }


search(term: string) {
  console.log("Here yet?")
  return new Promise((resolve, reject) => {
    this.results = [];
    let apiURL = this.apiRoot;
    console.log("Current URL is", apiURL)
    this.http.get(apiURL).toPromise().then(res => { this.results = res.results.map(item => 

      { 
        console.log("joe",item.id);
        return new SearchItem(item.id);
        
      });
          resolve();
        }, 
        msg => {
          // Error
           reject(msg);
           console.log("Error HEre",msg);
        } 
      );
  });
}
}




// <---------------------------------------------------------------------------------------------------------------------------------->
