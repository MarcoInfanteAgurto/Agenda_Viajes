import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { PorQueElegirnos } from "../../shared/por-que-elegirnos/por-que-elegirnos";
import { DestinosPopulares } from "../../shared/destinos-populares/destinos-populares";
import { Testimonios } from "../../shared/testimonios/testimonios";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [PorQueElegirnos, DestinosPopulares, Testimonios],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Cañete Tours | Paquetes turísticos económicos en Cañete');

    this.meta.updateTag({
      name: 'description',
      content: 'Cañete Tours ofrece experiencias únicas en viajes, tours en Cañete y paquetes turísticos económicos. Vive tu próxima aventura con nosotros.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'tours en Cañete, paquetes turísticos económicos, viajes en Cañete, turismo en Cañete, agencia de viajes'
    });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: 'Cañete Tours | Paquetes turísticos económicos en Cañete' });
    this.meta.updateTag({ property: 'og:description', content: 'Descubre los mejores tours en Cañete con precios accesibles. Agencia de viajes con experiencia en turismo y paquetes personalizados.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.canetetours.com/inicio' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.canetetours.com/assets/img/tour-ca%C3%B1ete.jpg' });
  }

  onVerPaquetes(): void {
    console.log('Navegando a paquetes...');
  }

  onConocerMas(): void {
    console.log('Mostrando más información...');
  }

  onScrollDown(): void {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }
}
