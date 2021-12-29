import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RootService } from './_root/root.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'/home',pathMatch:'full'},
      {path: 'app',component:AppComponent},
      {path: 'home', component:HomeComponent},
      {path: 'register',component:RegisterComponent},
      {path: 'welcome',component:WelcomeComponent}
    ]),
  ],
  providers: [RootService], //adding the service in an array 
  bootstrap: [AppComponent]
})
export class AppModule { }
