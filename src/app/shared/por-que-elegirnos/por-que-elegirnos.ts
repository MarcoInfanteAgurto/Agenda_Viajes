import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface Caracteristica {
  id: number;
  titulo: string;
  descripcion: string;
  icono: string;
}

@Component({
  selector: 'app-por-que-elegirnos',
  imports: [CommonModule],
  templateUrl: './por-que-elegirnos.html',
  styleUrl: './por-que-elegirnos.scss'
})
export class PorQueElegirnos {
  caracteristicas: Caracteristica[] = [
    {
      id: 1,
      titulo: 'Seguridad Garantizada',
      descripcion: 'Todos nuestros tours cumplen con los más altos estándares de seguridad y están asegurados.',
      icono: 'shield'
    },
    {
      id: 2,
      titulo: 'Guías Expertos',
      descripcion: 'Nuestro equipo de guías locales conoce cada rincón y te brindará la mejor experiencia.',
      icono: 'users'
    },
    {
      id: 3,
      titulo: '15 Años de Experiencia',
      descripcion: 'Somos líderes en turismo regional con miles de clientes satisfechos.',
      icono: 'award'
    },
    {
      id: 4,
      titulo: 'Disponibilidad 24/7',
      descripcion: 'Estamos disponibles para ti en cualquier momento durante tu viaje.',
      icono: 'clock'
    }
  ];

  constructor() { }
}
