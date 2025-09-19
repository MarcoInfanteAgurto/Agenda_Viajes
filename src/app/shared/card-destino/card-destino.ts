import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


export interface CardDestinoData {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  precio: number;
  rating: number;
  duracion: string;
  capacidad: string;
  incluye: string[];
}

@Component({
  selector: 'app-card-destino',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-destino.html',
  styleUrl: './card-destino.scss'
})
export class CardDestino {
   @Input() data!: CardDestinoData;
  @Input() showReserveButton: boolean = true;

  onReservar(): void {
    console.log('Reservar tour:', this.data.titulo);
    // Aquí puedes emitir un evento o llamar a un servicio
  }

  getStarArray(): number[] {
    return Array(5).fill(0).map((x, i) => i);
  }

  isStarFilled(index: number): boolean {
    return index < Math.floor(this.data.rating);
  }
}
