import { Component, Input, OnInit } from '@angular/core';
import { multipleSelectorModule } from './multipleSelectorModel';

@Component({
  selector: 'app-selector-multiple',
  templateUrl: './selector-multiple.component.html',
  styleUrls: ['./selector-multiple.component.css']
})
export class SelectorMultipleComponent implements OnInit{

  constructor(){

  }

  @Input() seleccionados: multipleSelectorModule[] = [];
  @Input() noSeleccionados: multipleSelectorModule[] = [];


  ngOnInit(): void {
    
  }

  seleccionar(item: multipleSelectorModule, index: number){
    this.seleccionados.push(item);
    this.noSeleccionados.splice(index,1)
  }

  deSeleccionar(item: multipleSelectorModule, index: number){
    this.noSeleccionados.push(item);
    this.seleccionados.splice(index,1)
  }

  seleccionarTodo(){
    this.seleccionados.push(...this.noSeleccionados);
    this.noSeleccionados = [];
  }

  deSeleccionarTodo(){
    this.noSeleccionados.push(...this.seleccionados);
    this.seleccionados = [];
  }
  

}
