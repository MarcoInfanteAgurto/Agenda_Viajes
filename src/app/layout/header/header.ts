import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
    // Propiedad para controlar el menú móvil
  isMenuOpen = false;

    // Método para toggle del menú móvil
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

    // Método para cerrar el menú al hacer click en un enlace
  closeMenu(): void {
    this.isMenuOpen = false;
  }

    // Método para scroll suave a sección (opcional)
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.closeMenu(); // Cerrar el menú después de hacer scroll
    }

  }
}
