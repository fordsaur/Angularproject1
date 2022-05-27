import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
// import { timeStamp } from 'console';
import { ServiceitemsService } from './serviceitems.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  constructor(private _todo:ServiceitemsService,private fb:FormBuilder,private _router:Router){

  }
  
  textform:FormGroup
  lname:any="";
  num:any=""
  user={
    List:"",
    id:"",
    value:" "
  }
  
  
  ngOnInit(){
    this.getitems() 
  }
  isEdit=false
  additems(formonj:any){
    console.log(formonj)
    this._todo.postdata(formonj).subscribe({
     // next:(res)=>console.log(res)
    })
    this.getitems();
  }
  getitems(){
    this._todo.todolistitems().subscribe({
      next:(res)=>this.lname=res
    })
  }
  deleteitems(id:any){
    console.log(id);
    this._todo.deletedata(id).subscribe({
     // next:(data)=>console.log("This is delete id"+data)   
    })
   this.getitems() 
  }
  setitems(id:any){
this.user.value=id
  }
  Edititems(ref:any){
   this.user=ref
  this.isEdit=true;
  }
  updateitem(){
    this.isEdit=!this.isEdit
    this._todo.updatedata(this.user).subscribe(()=>{
      this.getitems();
    })
  }
  title = 'TodoList1';
}
