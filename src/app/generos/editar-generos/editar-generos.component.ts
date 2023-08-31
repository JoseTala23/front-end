import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-editar-generos',
  templateUrl: './editar-generos.component.html',
  styleUrls: ['./editar-generos.component.css']
})
export class EditarGenerosComponent implements OnInit {
  router: any;


  modelo: generoCreacionDTO = { nombre: 'Jose Manuel'};

  constructor(private activateRoute: ActivatedRoute){

  }
  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      //alert(params.id)
    })
  }

  guardarCambios(genero: generoCreacionDTO){
    console.log(genero);
    this.router.navigate(['/generos'])
  }

}
