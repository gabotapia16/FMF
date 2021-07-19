import { Component, OnInit, Input } from '@angular/core';
import { DataFormularioService } from '../services/data-formulario.service';
import { FormularioService } from '../services/formulario.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  //emailCtrl = new FormControl('', [Validators.required]);
  //form: FormGroup;
  form = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellidoPaterno: new FormControl('', [Validators.required]),
    apellidoMaterno: new FormControl('', [Validators.email]),
    fechaNacimiento: new FormControl('', [Validators.maxLength(200)]),
    genero: new FormControl('', [Validators.required]),
    nacionalidad: new FormControl('', [Validators.required]),
    club: new FormControl('', [Validators.required]),
    rfc: new FormControl('', [Validators.required]),
    ocupacion: new FormControl('', [Validators.required]),
  });

  // inicialización de listas que se llenarán con los JSON
  @Input() dataEntrante: any;
  public listaClubes: any = [];
  public listaGeneros: any = [];
  public listaNacionalidades: any = [];

   nombre:string='juanito';
  



  constructor(private DataFormularioService: DataFormularioService) {
    this.buildForm();
   
/*
    var cumpleanos = new Date(fecha_nacimiento);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }*/
  }

  ngOnInit(): void {
    this.cargarClubes();
    this.cargarGeneros();
    this.cargarNacionalidades();
  }

  //obtenemos el json de los clubes
  public cargarClubes() {
    this.DataFormularioService.get("../../assets/data/clubes.json")
      .subscribe(respuesta => {
        this.listaClubes = respuesta;
        console.log(respuesta);
      })
  }

  //obtenemos el json de los generos
  public cargarGeneros() {
    this.DataFormularioService.get("../../assets/data/generos.json")
      .subscribe(respuesta => {
        this.listaGeneros = respuesta;
        console.log(respuesta);
      })
  }

  //obtenemos el json de las nacionalidades
  public cargarNacionalidades() {
    this.DataFormularioService.get("../../assets/data/nacionalidades.json")
      .subscribe(respuesta => {
        this.listaNacionalidades = respuesta;
        console.log(respuesta);
      })
  }

  private buildForm() {
    this.form.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value.fechaNacimiento);

      let hoy = new Date();
      let cumpleanos = new Date(value.fechaNacimiento);
      let anioCumple=cumpleanos.getFullYear();
      let anioHoy=hoy.getFullYear();
      let edad = anioHoy - anioCumple;
      console.log(anioHoy);
      let diferenciaMeses = hoy.getMonth() - cumpleanos.getMonth();
      if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < cumpleanos.getDate())){
        edad--;
      }
      if (edad<18)
      {
        alert('no eres mayor de edad');
      }
      //document.getElementById('titulo').value='holaaaa';
      //$("#titulo").val('holaaaaa');

    });
  }

}
