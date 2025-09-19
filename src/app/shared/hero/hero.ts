import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  @Input() titulo: string = 'Nuestra Historia';
  @Input() parrafo1: string = 'Fundada en 2008 por un grupo de guías turísticos apasionados por mostrar las maravillas de Cañete, nuestra agencia ha crecido hasta convertirse en la referencia local para turismo responsable y experiencias auténticas.';
  @Input() parrafo2: string = 'Creemos que cada viaje debe ser una aventura transformadora que deje recuerdos para toda la vida, respetando siempre nuestro patrimonio natural y cultural.';
  @Input() anoFundacion: string = '2008';
  @Input() anoActual: string = '2024';
  @Input() clientesActuales: string = '500+ Clientes';
  
  @Input() imagenes: string[] = [
    'assets/images/historia-1.jpg',
    'assets/images/historia-2.jpg',
    'assets/images/historia-3.jpg'
  ];
}
