import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../../components/product-card/product-card'; // ✅ ruta correcta

interface Product {
  name: string;
  image: string;
  category: string;
  price: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCard], // ✅ importado aquí
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products {
  products: Product[] = [
    {
      name: 'Guitarra Eléctrica Gibson Lp Studio Cherry Sunburst',
      image: 'assets/img/Guitarras-electricas/LPST01HSCH1_front_76ecc6d2-9260-4c42-8dd1-8edfcb278346.webp',
      category: 'Guitarras',
      price: 4500000
    },
    {
      name: 'Batería Electrónica Roland TD-1DMK',
      image: 'assets/img/Baterias/roland.webp',
      category: 'Baterías',
      price: 5200000
    }
  ];

  selectedCategory: string = 'Todos';

  get filteredProducts() {
    if (this.selectedCategory === 'Todos') return this.products;
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  changeCategory(cat: string) {
    this.selectedCategory = cat;
  }
}
