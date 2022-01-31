import { Component } from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'csf_day4';
  priorities = ['Low', 'Medium','High','Damn Urgent'];
  todo = {
    task: '',
    priority:'',
    dueDate:''
  };
  parentcount: number = 0;

  carts = new Map<string, number>();

  parentaction($e:number){
    this.parentcount = this.parentcount + $e;
  }

  parentactionfromchild2($e:number){
    this.parentcount = $e;
  }

  receiveCartInfo($e: Map<string,number>){
    this.carts = $e;

  }
  onSubmit(form:NgForm){
    this.todo.task = this.
  }

  addTodo(task:string, priority:string, dueDate:string){
    console.log(task)
    console.log(priority)
    console.log(dueDate)
  }


}
