import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componentej2', // Selector del componente
  standalone: true, 
  imports: [NgIf],
  templateUrl: './componentej2.component.html', // Ruta a la plantilla HTML
  styleUrl: './componentej2.component.css'// Ruta a la hoja de estilo CSS
})
export class Componentej2Component {
   // Ejercicio 2 - Propiedades y lógica del componente
  mensaje1: string = 'Se está mostrando el MENSAJE 1';
  mensaje2: string = "Se está mostrando el MENSAJE 2";
  mostrarMje2: boolean = false;

  muestraMje2() {
    this.mostrarMje2 = !this.mostrarMje2;
  }
}
