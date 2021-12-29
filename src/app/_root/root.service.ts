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

  loginForm:any = new FormGroup({
    loginUserName : new FormControl('') ,
    loginPassWord : new FormControl('')
  });

  loginform(){
    console.log("angular login request function");

    var loginFormData:any = new FormData();

    /*append --> user name*/ 
    loginFormData.append("loginUserName",this.loginForm.get('loginUserName').value); 

    /*append --> pass word*/ 
    loginFormData.append("loginPw", this.loginForm.get('loginPassWord').value); 

    return this.http.get<any>('api/login',loginFormData);
    
  }

  registerationForm:any = new FormGroup({
    registerUserName: new FormControl(''),
    registerPassWord: new FormControl(''),
    registerConfirmPassWord: new FormControl('')
  });

  registerform(){
    console.log("angular registration request function");

    var registerFormData:any = new FormData();
    
    /*append -->  user name */
    registerFormData.append("registerUserName",this.registerationForm.get('registerUserName').value);

    /*append --> pass word*/
    registerFormData.append("registerPw",this.registerationForm.get('registerPassword').value);

    /*append --> confirm pass word */
    registerFormData.append("registerConfirmPw",this.registerationForm.get('registerConfirmPassword').value);

    return this.http.post<any>('api/register',registerFormData);
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

/*
   USING OBSERVABLES THAT HAS OUR 2 FUNCTIONS AS A COLLECTION OF EXECUTABLES 

 */
