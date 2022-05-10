import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  title = "Jamik";
  
  created = new Date();
  
  company = "Green Word pictures";
  
  projects = [
    {name:"Project 1",status:"stable"},
    {name:"Project 2",status:"offline"},
    {name:"Project 3",status:"stable"},
  ];
  
  filteredStatus = "";

  appStatus = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('stable')
    }, 2000);
  })

  constructor() { }

  ngOnInit(): void {
  }

}
