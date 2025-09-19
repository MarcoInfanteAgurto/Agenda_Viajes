import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Estadistica {
  numero: string;
  descripcion: string;
  icono: string;
}

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estadisticas.html',
  styleUrl: './estadisticas.scss'
})
export class Estadisticas {
   @Input() estadisticas: Estadistica[] = [
    {
      numero: '500+',
      descripcion: 'Clientes Satisfechos',
      icono: 'users'
    },
    {
      numero: '15+',
      descripcion: 'Años de Experiencia',
      icono: 'award'
    },
    {
      numero: '25+',
      descripcion: 'Destinos Únicos',
      icono: 'map-pin'
    },
    {
      numero: '100%',
      descripcion: 'Compromiso',
      icono: 'heart'
    }
  ];
}
