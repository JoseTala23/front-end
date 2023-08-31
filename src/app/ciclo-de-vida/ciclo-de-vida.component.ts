import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit{
  
  constructor() {  }

  @Input()
  titulo: string;
  
  ngOnInit(): void {
    console.log('on init')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes')
  }
  ngOnDestroy(): void {
    console.log('on destroy')
  }
  ngDoCheck(): void {
    console.log('do check')
  }
  ngAfterViewInit(): void {
    console.log('after view init')
  }

}
