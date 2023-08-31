import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit{

  modelo: actorDTO = {
      nombre: "Jose Manuel",
      fechaNacimiento: new Date(),
      foto: 'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQ4vi_du17tgWoFRa8kRnZHJYrwNkYgvX86XE_JyuKC0HlQZdn46Wd-BvewGoVrqmbV'
  }

  constructor(private activeRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      //alert(params.id)//Mismo nombre que la variable de ruta
    })
  }

  guardarCambios(actor: actorCreacionDTO){
    console.log(actor);
  }


}
