import { Routes } from '@angular/router';
import { Inicio } from './feature/inicio/inicio';
import { Nosotros } from './feature/nosotros/nosotros';
import { Servicios } from './feature/servicios/servicios';

export const routes: Routes = [
    {
        path: 'inicio',
        component:Inicio
    },
    {
        path: 'nosotros',
        component:Nosotros
    },
    {
        path: 'servicios',
        component:Servicios
    },
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    }
];
