import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeTaskService } from '../home-task.service';
@Component({
  selector: 'app-todo-ctrl',
  templateUrl: './todo-ctrl.component.html',
  styleUrls: ['./todo-ctrl.component.css']
})
export class TodoCtrlComponent implements OnInit {
public buttonValue =  true;
public value :string;
public todoValue = new Array();
public obj = this.homeService.getObject();
public index;
public headerName;
  constructor(private route :ActivatedRoute,private homeService : HomeTaskService) { }

  ngOnInit() {
  	this.headerName = this.route.snapshot.paramMap.get('homeValue');
    this.todoValue = this.obj[this.headerName];
    console.log(this.obj);
  }
  addTodo()
  {
  	this.todoValue.push(this.value);
  	this.value = '';
  }
  deleteTodo(i)
  {
    if(confirm("Are you Sure"))
    {
      this.todoValue.splice(i,1);   
    }
    else
    {
      return;
    }
    this.buttonValue = true;
  }
  editTodo(i){
    this.index = i;
    this.value = this.todoValue[i];
    this.buttonValue = false;
  }
  updateTodo()
  {
    this.todoValue[this.index] = this.value;
    this.buttonValue = true;
    this.value = '';
  }
  downTodo(i)
  {
  	let temp = this.todoValue[i];
  	this.todoValue[i] =this.todoValue[i+1];
  	this.todoValue[i+1] = temp;
  }
  upTodo(i)
  {
  	let temp = this.todoValue[i];
  	this.todoValue[i] =this.todoValue[i-1];
  	this.todoValue[i-1] = temp;
  }
}
