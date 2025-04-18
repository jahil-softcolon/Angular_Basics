import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Basics';

  //count = 0;

  // handleIncrement(){
  //   this.count=this.count+1
  // }

  // handleDecrement(){
  //   this.count=this.count-1
  // }

  // handleReset(){
  //   this.count=0
  // }

  // handleCounter(val:string){
  //   if(val == "minus")
  //   {
  //     this.count=this.count-1
  //   }else if(val == "plus")
  //   {
  //     this.count=this.count+1
  //   }else{
  //     this.count=0
  //   }
  // }

  // handleEvent(){
  //   console.log("Function Called",);
    
  // }

  // name=""
  // displayName = "";
  // getName(event:Event){
  //   this.name =(event.target as HTMLInputElement).value 
  // }

  // InputName(){
  //   this.displayName = this.name;

  // }

  // display = true

  // hideDiv(){
  //   this.display = false
  // }
  // showDiv(){
  //   this.display = true
  // }
  // toggle(){
  //   this.display = !this.display
  // }

  color =1

  handleColor(val:number)
  {
    this.color = val
  }

handleInput(event:Event)
{
  this.color = parseInt((event.target as HTMLInputElement).value)
}

count = signal(10);
x = 20;

constructor(){
  effect(() => {
    console.log(this.count());
  })
}
UpdateValue(val:string){
  if(val == "inc"){
    this.count.set(this.count() + 1);
  }else{
  this.count.set(this.count() - 1);

  }

}
}
 