import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cines',
  templateUrl: './editar-cines.component.html',
  styleUrls: ['./editar-cines.component.css']
})
export class EditarCinesComponent implements OnInit{

  modelo: cineDTO = {
    nombre: 'Jose Manuel'
  }
  

  constructor(private activateRoute: ActivatedRoute){

  }


  ngOnInit(): void {
    
  }

  guardarCambios(cine: cineCreacionDTO){
    console.log(cine)
  }

  

}
