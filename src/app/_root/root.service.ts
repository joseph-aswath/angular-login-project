import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
//import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class RootService {

  constructor(private http: HttpClient, 
              private fb: FormBuilder,
              private form: FormGroup ) { }
   
  api = 'http://localhost:9000';

  loginForm = new FormGroup({
    loginUserName : new FormControl('') ,
    loginPassWord : new FormControl('')
  });

  loginform(){
    var loginFormData = new FormData();
    return this.http.get<any>('');
  }

  registerationForm = new FormGroup({
    registerUserName: new FormControl(''),
    registerPassWord: new FormControl(''),
    registerConfirmPassWord: new FormControl('')
  });

  registerform(){
    var registerFormData = new FormData();
    //return this.http.post<any>('');
  }



}

/*
  //login function 
  loginform(){
    console.log("login function");
    
    var LoginFormData:any= new FormData();

    LoginFormData.append("loginUserName",this.loginForm.get('loginUserName').value);
    LoginFormData.append("loginPw",this.loginForm.get('loginPassWord').value);

    return this.http.get('api/login',LoginFormData);
  }

  registerationForm = new FormGroup({
    registerUserName : new FormControl(''),
    registerPassWord : new FormControl(''),
    registerConfirmPassWord : new FormControl('')
  });
  
  //register function
  registerform(){
    console.log("registration function");

    var RegisterFormData:any = new FormData();

    RegisterFormData.append("registerUserName",this.registerationForm.get('registerUserName').value);
    RegisterFormData.append("registerPw",this.registerationForm.get('registerPassword').value);
    RegisterFormData.append("",this.registerationForm.get('registerConfirmPassword').value);

    return this.http.post('api/register',RegisterFormData);
  } 
  */

