import { Component, OnInit } from '@angular/core';
import { RootService } from '../root/root.service';
//import { FormControl, FormGroup } from '@angular/forms';
//import { Observable } from 'rxjs';
//import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rootService:RootService) { }

  ngOnInit() { }

}
