import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface Testimonio {
  id: number;
  nombre: string;
  ciudad: string;
  testimonio: string;
  rating: number;
  avatar: string;
}


@Component({
  selector: 'app-testimonios',
  imports: [CommonModule],
  templateUrl: './testimonios.html',
  styleUrl: './testimonios.scss'
})
export class Testimonios {
  testimonios: Testimonio[] = [
    {
      id: 1,
      nombre: 'María González',
      ciudad: 'Lima',
      testimonio: 'Increíble experiencia en Cerro Azul. Los guías fueron muy profesionales y el tour superó nuestras expectativas.',
      rating: 5,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hPLjomwnUGBOVDM8_4EWDHZuGtoPAqNrTw&s'
    },
    {
      id: 2,
      nombre: 'Carlos Mendoza',
      ciudad: 'Arequipa',
      testimonio: 'El tour a Lunahuaná fue espectacular. Perfecta organización y actividades muy emocionantes.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      nombre: 'Ana Rodríguez',
      ciudad: 'Cusco',
      testimonio: 'Cañete Tours hizo que nuestras vacaciones familiares fueran inolvidables. Altamente recomendado.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  constructor() { }

  getStarArray(rating: number): boolean[] {
    const stars: boolean[] = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < rating);
    }
    return stars;
  }
}
