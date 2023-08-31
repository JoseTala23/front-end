import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
 
  @Input()
  maximoRating = 5;
  @Input()
  ratingSeleccionado = 0;
  maximoRatingArray = []
  isRatingSeleccionado = false;
  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();



  constructor(){

  }

  ngOnInit(): void {
    this.maximoRatingArray = Array(this.maximoRating).fill(0);
  }

  manejarMouseEnter(indice:number): void{
    this.ratingSeleccionado = indice + 1;
  }

  manejarMouseLeave(){
    if(!this.isRatingSeleccionado){
      this.ratingSeleccionado = 0;
    }
  }

  rating(indice:number): void{
    this.isRatingSeleccionado = true;
    this.ratingSeleccionado = indice + 1;
    this.rated.emit(this.ratingSeleccionado);
  }
}
