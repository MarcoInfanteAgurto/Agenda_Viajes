import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardDestinoData, CardDestino } from '../../shared/card-destino/card-destino';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, CardDestino],
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss'
})
export class Servicios implements OnInit{
  toursData: CardDestinoData[] = [
    {
      id: 1,
      titulo: 'Tour Playa Hermosa',
      descripcion: 'Disfruta de un día completo en una de las playas más hermosas de Cañete con almuerzo incluido.',
      imagen: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/12/32/e8/95.jpg',
      precio: 89,
      rating: 4.9,
      duracion: '8 horas',
      capacidad: '2-15 personas',
      incluye: [
        'Transporte incluido',
        'Almuerzo típico',
        'Guía especializado'
      ]
    },
    {
      id: 2,
      titulo: 'Aventura en Lunahuaná',
      descripcion: 'Rafting, canopy y degustación de vinos en el valle más aventurero del Perú.',
      imagen: 'https://www.rumbosdelperu.com/wp-content/uploads/2017/05/canopy-banos-ecuador.jpg',
      precio: 149,
      rating: 4.8,
      duracion: '2 días',
      capacidad: '4-12 personas',
      incluye: [
        'Rafting nivel II-III',
        'Canopy extremo',
        'Cata de vinos'
      ]
    },
    {
      id: 3,
      titulo: 'Circuito Histórico',
      descripcion: 'Conoce la rica historia de Cañete visitando sitios arqueológicos y pueblos tradicionales.',
      imagen: 'https://v0-agencia-de-viajes-website.vercel.app/historical-archaeological-site-in-ca-ete-peru.jpg',
      precio: 69,
      rating: 4.7,
      duracion: '6 horas',
      capacidad: '2-20 personas',
      incluye: [
        'Sitios arqueológicos',
        'Pueblos tradicionales',
        'Historia local'
      ]
    },
    {
      id: 4,
      titulo: 'Escapada Romántica',
      descripcion: 'Paquete especial para parejas con cena romántica y hospedaje en hotel boutique.',
      imagen: 'https://v0-agencia-de-viajes-website.vercel.app/romantic-sunset-dinner-beach-peru-couple.jpg',
      precio: 299,
      rating: 5,
      duracion: '2 días / 1 noche',
      capacidad: '2 personas',
      incluye: [
        'Hotel boutique',
        'Cena romántica',
        'Spa incluido'
      ]
    },
    {
      id: 5,
      titulo: 'Ecoturismo Reserva',
      descripcion: 'Explora la biodiversidad única de las reservas naturales de Cañete con guías especializados.',
      imagen: 'https://v0-agencia-de-viajes-website.vercel.app/nature-reserve-wildlife-peru-birds-forest.jpg',
      precio: 119,
      rating: 4.9,
      duracion: '10 horas',
      capacidad: '3-10 personas',
      incluye: [
        'Observación de aves',
        'Flora endémica',
        'Fotografía natural'
      ]
    },
    {
      id: 6,
      titulo: 'Tour Gastronómico',
      descripcion: 'Degusta los sabores auténticos de Cañete en mercados locales y restaurantes tradicionales.',
      imagen: 'https://v0-agencia-de-viajes-website.vercel.app/traditional-peruvian-food-market-local-cuisine.jpg',
      precio: 99,
      rating: 4.8,
      duracion: '7 horas',
      capacidad: '2-12 personas',
      incluye: [
        'Mercados locales',
        'Cocina tradicional',
        'Chef especializado'
      ]
    }
  ];

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Paquetes turísticos | Cañete Tours');

    this.meta.updateTag({
      name: 'description',
      content: 'Explora nuestros paquetes turísticos económicos en Cañete. Viajes accesibles, tours guiados y experiencias únicas al mejor precio.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'paquetes turísticos económicos, tours en Cañete, viajes baratos, turismo en Cañete, promociones de viajes'
    });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: 'Paquetes turísticos | Cañete Tours' });
    this.meta.updateTag({ property: 'og:description', content: 'Descubre los mejores paquetes turísticos en Cañete con experiencias únicas y precios accesibles.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.canetetours.com/servicios' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.canetetours.com/assets/img/paquetes.jpg' });
  }

  ngOnInit(): void {
    // Aquí puedes cargar los datos desde un servicio
    // this.cargarTours();
  }

  // Método para cargar tours desde un servicio
  private cargarTours(): void {
    // Implementar llamada al servicio
    // this.tourService.getTours().subscribe(tours => {
    //   this.toursData = tours;
    // });
  }
}
