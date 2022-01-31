import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {
  @Input() child1count : number = 0;
  @Output() child1action : EventEmitter<number> = new EventEmitter()
  @Output() passCartInfo : EventEmitter<Map<string,number>> = new EventEmitter()

  cartsmap= new Map<string,number>([
    ['apple',0],
    ['orange',0],
    ['banana',0],
  ])

  constructor () {}

  child1add(){
    this.child1count++;
    this.child1action.emit(1);
  }

  addtocart(fruit: string){
    this.cartsmap.set(fruit, (<number>this.cartsmap.get(fruit)+1))
    this.passCartInfo.emit(this.cartsmap);
  }
}
