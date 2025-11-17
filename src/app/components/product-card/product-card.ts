import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCard {
  @Input() product!: {
    name: string;
    image: string;
    category: string;
    price: number;
  };

  mostrarCompra = false;

  abrirCompra(): void {
    this.mostrarCompra = true;
  }

  cerrarCompra(): void {
    this.mostrarCompra = false;
  }
  mensajeAgregado = false;

  confirmarCompra(): void {
    this.mostrarCompra = false;
    this.mensajeAgregado = true;

    // Ocultar el mensaje después de 2.5 segundos
    setTimeout(() => {
      this.mensajeAgregado = false;
    }, 2500);
  }
  
}