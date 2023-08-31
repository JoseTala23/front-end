import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { peliculaCreacionDTO } from '../pelicula';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent {

  constructor(private router:Router){
    
  }

  guardarCambios(pelicula: peliculaCreacionDTO){
    console.log(pelicula);
  }

}
