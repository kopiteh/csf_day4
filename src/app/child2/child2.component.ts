import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})

export class Child2Component {
  @Input() carts = new Map<string, number>()
  @Output() passCartInfo : EventEmitter<Map<string,number>> = new EventEmitter()

  child2remove(fruit:string){
    this.carts.set(fruit, 0)
    this.passCartInfo.emit(this.carts)
  }
  constructor () {}
}
