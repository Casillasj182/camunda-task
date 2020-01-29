import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  users;
  title = 'angular-material-test';
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon('CIS_Logo', this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/DHSseal.svg")
    );
  }
 
  
  
  
}

// constructor(private activatedRoute: ActivatedRoute) {
//   this.activatedRoute.queryParams.subscribe(params => {
//         let date = params['startdate'];
//         console.log(date); // Print the parameter to the console. 
//     });
// }




