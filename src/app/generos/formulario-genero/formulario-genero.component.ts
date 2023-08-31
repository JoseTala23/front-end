import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent {

  constructor(private router: Router,
              private formBuilder: FormBuilder)
  {


  }

  form: FormGroup;

  @Input()
  modelo: generoCreacionDTO;

  @Output()
  OnSubmit: EventEmitter<generoCreacionDTO> = new EventEmitter();


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators : [Validators.required]
      }]
    });

    if(this.modelo != undefined){
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
    this.OnSubmit.emit(this.form.value);
  }

  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');
    if(campo.hasError('required')){
      return 'El campo nombre es requerido'
    }
  }



}
