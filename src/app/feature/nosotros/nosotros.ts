import { Component } from '@angular/core';
import { Estadisticas } from "../../shared/estadisticas/estadisticas";
import { Hero } from "../../shared/hero/hero";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [Estadisticas, Hero],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.scss'
})
export class Nosotros {
   constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Nosotros | Cañete Tours');

    this.meta.updateTag({
      name: 'description',
      content: 'En Cañete Tours contamos con amplia experiencia en turismo, un equipo profesional y pasión por brindar los mejores viajes en Cañete.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'agencia de viajes en Cañete, experiencia en turismo, equipo de viajes, turismo en Cañete, tours locales'
    });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: 'Nosotros | Cañete Tours' });
    this.meta.updateTag({ property: 'og:description', content: 'Conoce al equipo de Cañete Tours y nuestra experiencia en el rubro del turismo.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.canetetours.com/nosotros' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.canetetours.com/assets/img/equipo.jpg' });
  }
}
