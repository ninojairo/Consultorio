import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

username: String;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.username = this.activateRoute.snapshot.params['username'];
    console.log('name' +this.username)
    

  }

}
