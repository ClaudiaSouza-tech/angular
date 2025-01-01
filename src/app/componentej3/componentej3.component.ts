import { Component } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-componentej3',
  standalone: true, 
  imports: [],
  templateUrl: './componentej3.component.html',
  styleUrl: './componentej3.component.css'
})

export class Componentej3Component {
  producto : Producto = {
          codigo : 1,
          nombre : "ventilador",
          precio : 75000,
       estaStock : true,
    };
  }  