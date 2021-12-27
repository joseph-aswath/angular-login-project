import { Component, OnInit } from '@angular/core';
import { RootService } from '../root/root.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private rootService: RootService) { }

  ngOnInit(): void {
    //to be subscribed 
  }

}
