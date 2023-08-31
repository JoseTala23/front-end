import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { cineCreacionDTO } from '../cine';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.css']
})
export class CrearCineComponent {

  constructor(private router:Router){

  }

  guardarCambios(cine: cineCreacionDTO){
    console.log(cine);
  }
}
