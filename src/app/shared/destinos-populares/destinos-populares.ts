import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Destino {
  id: number;
  nombre: string;
  rating: number;
  descripcion: string;
  precio: number;
  imagen: string;
  ubicacion: string;
}

@Component({
  selector: 'app-destinos-populares',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destinos-populares.html',
  styleUrl: './destinos-populares.scss'
})
export class DestinosPopulares {
  destinos: Destino[] = [
    {
      id: 1,
      nombre: 'Playa Cerro Azul',
      rating: 4.8,
      descripcion: 'Perfecta para surf y relajación familiar',
      precio: 150,
      imagen: 'https://coviperu.com/wp-content/uploads/2020/01/Cerro_Azul.jpg',
      ubicacion: 'Cañete, Lima'
    },
    {
      id: 2,
      nombre: 'Reserva de Paracas',
      rating: 4.9,
      descripcion: 'Vida marina espectacular y paisajes únicos',
      precio: 280,
      imagen: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ubicacion: 'Paracas, Ica'
    },
    {
      id: 3,
      nombre: 'Valle de Lunahuaná',
      rating: 4.7,
      descripcion: 'Aventura extrema y deportes acuáticos',
      precio: 220,
      imagen: 'https://www.rumbosdelperu.com/wp-content/uploads/2021/03/Turismo-en-Lunahuana-990x556.jpg',
      ubicacion: 'Lunahuaná, Lima'
    }
  ];

  constructor() { }

  onDestinoClick(destino: Destino): void {
    console.log('Destino seleccionado:', destino);
    // Lógica para navegar al detalle del destino
  }

  getStarArray(rating: number): boolean[] {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars: boolean[] = [];
    
    for (let i = 0; i < 5; i++) {
      stars.push(i < fullStars);
    }
    
    return stars;
  }
}
