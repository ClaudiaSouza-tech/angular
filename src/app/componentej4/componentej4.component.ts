import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

type Fruta = Array<{ id: number; nombre: string; precio: number }>;

@Component({
  selector: 'app-componentej4',
  standalone: true,
  imports: [NgFor],
  templateUrl: './componentej4.component.html',
  styleUrl: './componentej4.component.css'
})
export class Componentej4Component {
  frutas: Fruta = [
    { id: 1, nombre: "Manzana", precio: 2000 },
    { id: 2, nombre: "Banana", precio: 2005},
    { id: 3, nombre: "Naranja", precio: 2010},
    { id: 4, nombre: "Arandanos", precio: 2015 }
  ];
}




