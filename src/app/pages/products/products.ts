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
  imports: [CommonModule, ProductCard],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products {
  products: Product[] = [
    {
      name: 'Gibson GoldTop 2012',
      image: 'assets/Instrumentos/Gt1.jpg',
      category: 'Guitarras',
      price: 9400000
    },
    {
      name: 'LTD M-HT Black Metal',
      image: 'assets/Instrumentos/Gt2.jpg',
      category: 'Guitarras',
      price: 3550000
    },
    {
      name: 'PRS Custom 22',
      image: 'assets/Instrumentos/Gt3.jpg',
      category: 'Guitarras',
      price: 9700000
    },
    {
      name: 'Gibson Lp Sunburst',
      image: 'assets/Instrumentos/Gt4.webp',
      category: 'Guitarras',
      price: 4500000
    },
    {
      name: 'Gibson GoldTop 2012',
      image: 'assets/Instrumentos/Gt5.jpg',
      category: 'Guitarras',
      price: 9000000
    },
    {
      name: 'Gibson Les Paul Studio U.S.A',
      image: 'assets/Instrumentos/Gt6.jpg',
      category: 'Guitarras',
      price: 4750000
    },
    {
      name: 'Steve Vai JEM77P ‘21',
      image: 'assets/Instrumentos/Gt7.jpg',
      category: 'Guitarras',
      price: 4680000
    },
    {
      name: 'Ibanez Prestige 7',
      image: 'assets/Instrumentos/Gt8.jpg',
      category: 'Guitarras',
      price: 4680000
    },
    {
      name: 'ESP Eclipse E-ii Japon 7',
      image: 'assets/Instrumentos/Gt9.jpg',
      category: 'Guitarras',
      price: 7500000
    },
    {
      name: 'Pedalera Fractal FM3',
      image: 'assets/Instrumentos/Pd1.jpg',
      category: 'Pedales',
      price: 3920000
    },
    {
      name: 'Kemper Profiler Head',
      image: 'assets/Instrumentos/Pd2.jpg',
      category: 'Pedales',
      price: 3920000
    },
    {
      name: 'Pedal Neural Nano Córtex',
      image: 'assets/Instrumentos/Pd3.jpg',
      category: 'Pedales',
      price: 9000000
    },
    {
      name: 'Flanger BF3',
      image: 'assets/Instrumentos/Pd4.jpg',
      category: 'Pedales',
      price: 3800000
    },
    {
      name: 'Delay DD3 Boss',
      image: 'assets/Instrumentos/Pd5.jpg',
      category: 'Pedales',
      price: 380000
    },
    {
      name: 'Boss GT1000',
      image: 'assets/Instrumentos/Pd6.jpg',
      category: 'Pedales',
      price: 3000000
    },
    {
      name: 'Bajo Mayones BE Exotic 5',
      image: 'assets/Instrumentos/B1.jpg',
      category: 'Bajos',
      price: 9500000
    },
    {
      name: 'Bajo eléctrico Marcus Miller',
      image: 'assets/Instrumentos/B2.jpg',
      category: 'Bajos',
      price: 4300000
    },
    {
      name: 'Bajo eléctrico Floyc',
      image: 'assets/Instrumentos/B3.jpg',
      category: 'Bajos',
      price: 3300000
    },
    {
      name: 'Bajo Ibanez Sr306eb-wk',
      image: 'assets/Instrumentos/B4.jpg',
      category: 'Bajos',
      price: 2500000
    },
    {
      name: 'Bajo persian',
      image: 'assets/Instrumentos/B5.jpg',
      category: 'Bajos',
      price: 1300000
    },
    {
      name: 'Bajo Activo LTD B-206sm',
      image: 'assets/Instrumentos/B6.jpg',
      category: 'Bajos',
      price: 2400000
    },
    {
      name: 'Bajo ibanez SDGR 5',
      image: 'assets/Instrumentos/B7.jpg',
      category: 'Bajos',
      price: 1900000
    },
    {
      name: 'Bateria Ludwig',
      image: 'assets/Instrumentos/Bt1.webp',
      category: 'Baterias',
      price: 3490000
    },
    {
      name: 'Bateria Yamaha',
      image: 'assets/Instrumentos/Bt2.webp',
      category: 'Baterias',
      price: 4500000
    },
    {
      name: 'Bateria Pearl',
      image: 'assets/Instrumentos/Bt3.webp',
      category: 'Baterias',
      price: 5000000
    },
    {
      name: 'Bateria Tama',
      image: 'assets/Instrumentos/Bt4.webp',
      category: 'Baterias',
      price: 6950000
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
