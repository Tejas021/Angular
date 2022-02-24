import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }

  @Output() newItemEvent = new EventEmitter<string>();

item:string="";
  addItem(strr:string){
    this.item=strr
    this.newItemEvent.emit(strr)
  }

  ngOnInit(): void {}

}
