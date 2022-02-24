import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data } from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
count:number=0;
setter:string="";
name:String="";
@Input() data?:Data;


@Output() newEmitter  = new EventEmitter<string>();

handler(strr:string){
  this.newEmitter.emit(strr)
}

increament(){
  this.count++
}
@Input() state:string="";
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
