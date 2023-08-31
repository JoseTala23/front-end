import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { peliculaCreacionDTO, peliculaDTO } from '../pelicula';
import { multipleSelectorModule } from 'src/app/utilidades/selector-multiple/multipleSelectorModel';

@Component({
  selector: 'app-formulario-peliculas',
  templateUrl: './formulario-peliculas.component.html',
  styleUrls: ['./formulario-peliculas.component.css']
})
export class FormularioPeliculasComponent implements OnInit{

  constructor(private formBuilder: FormBuilder){

  }

  form: FormGroup

  @Output()
  OnSubmit: EventEmitter<peliculaCreacionDTO> = new EventEmitter<peliculaCreacionDTO>();


  @Input() modelo: peliculaDTO;

  generosNoSeleccionados: multipleSelectorModule[] = [
    {llave: 1, valor: 'Drama'},
    {llave: 2, valor: 'Acción'},
    {llave: 3, valor: 'Comedia'}
  ]

  generosSeleccionados: multipleSelectorModule[] = []

  cinesNoSeleccionados: multipleSelectorModule[] = [
    {llave: 1, valor: 'Cine1'},
    {llave: 2, valor: 'Cine2'},
    {llave: 3, valor: 'Cine3'}
  ]

  cinesSeleccionados: multipleSelectorModule[] = []


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo:[
        '',
        {
          validators: [Validators.required]
        }
      ],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: '',
      generosId: [],
      cinesId: []
    })

    if(this.modelo !== undefined){      
      this.form.patchValue(this.modelo);
    }
  }
  archivoSeleccionado(file){
    this.form.get('poster').setValue(file);
  }

  changeMarkdown(texto){
    this.form.get('resumen').setValue(texto);
  }

  guardarCambios(){
    console.log(this.generosSeleccionados)

    //Generos
    const generosId = this.generosSeleccionados.map(val => val.llave);
    this.form.get('generosId').setValue(generosId);

    //Cines
    const cinesId = this.cinesSeleccionados.map(val => val.llave);
    this.form.get('cinesId').setValue(cinesId);


    this.OnSubmit.emit(this.form.value);
  }


}
