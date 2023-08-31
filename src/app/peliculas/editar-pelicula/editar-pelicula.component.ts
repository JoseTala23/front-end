import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { peliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit{


  modelo: peliculaDTO = {
    titulo: 'titulo pelicula',
    resumen: 'Texto resumen',
    enCines: true,
    trailer: 'Enlace del trtailer',
    fechaLanzamiento: new Date(),
    poster: 'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ4vi_du17tgWoFRa8kRnZHJYrwNkYgvX86XE_JyuKC0HlQZdn46Wd-BvewGoVrqmbV' 
}

  constructor(private activateRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    // this.activateRoute.params.subscribe(params => {
    //   alert(params.id)
    // })
  }

  guardarCambios(pelicula: peliculaDTO){
    console.log(pelicula);
  }

}
