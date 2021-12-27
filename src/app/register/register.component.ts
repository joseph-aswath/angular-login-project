import { Component, OnInit } from '@angular/core';
import { RootService } from '../root/root.service';
//import { FormControl, FormGroup } from '@angular/forms';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private rootService : RootService) { }

  ngOnInit(): any{ }

} 



