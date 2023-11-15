import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'MiComponente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mi-componente.component.html',
  styleUrl: './mi-componente.component.css',
})
export class MiComponente {
  public titulo: string;
  public comentario: string;
  public year: number;
  constructor(){
    this.titulo = 'Hola mundo'
    this.comentario = 'Este es mi primer componente'
    this.year = 2023
    console.log("MiComponente cargado")
    console.log(this.titulo, this.comentario, this.year)
}
}
