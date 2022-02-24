import { Component } from '@angular/core';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  template:`<h1 class="red">{{tejas}}</h1>
  <!-- <p>{{b.name}}</p> -->
  <!-- <app-test [data]='{name:"TEajs",email:"tejas"}'></app-test> -->
  <router-outlet></router-outlet>
  <p>global item : {{items}}</p>
  <app-binding (newItemEvent)="add($event)" ></app-binding>
  <app-test (newEmitter)="eventHandler($event)"></app-test>`,
  styles:[".red{color:red}"]
})

export class AppComponent {
 
  tejas:string="tejas"
 items:string="";


  add(str:string):void{
    console.log(str);
    this.items=str
  }

eventHandler(a:string){
  alert(a)
}

 
  constructor(){
    console.log("hi")
    
  }
}
