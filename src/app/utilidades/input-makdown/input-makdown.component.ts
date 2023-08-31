import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-makdown',
  templateUrl: './input-makdown.component.html',
  styleUrls: ['./input-makdown.component.css']
})
export class InputMakdownComponent {

  @Input()
  contenidoMarkdown: string = 'Texto';
  
  @Input()
  placeHolderTextarea: string = 'Texto';


  @Output()
  changeMarkdown: EventEmitter<string> = new EventEmitter<string>();

  constructor(){

  }

  ngOninit(): void{

  }

}
