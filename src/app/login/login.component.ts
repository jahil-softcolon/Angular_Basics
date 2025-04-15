import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginClick(){
    console.log("Login Click Function Called");
    this.otherFunction()
  }

  otherFunction(){
    console.log("otherFunction Called");
    console.log("otherFunction Called");
    console.log("otherFunction Called");
  }

  name:string="Jahil"

  updateName(){
    this.name="Hii"
  }
}
