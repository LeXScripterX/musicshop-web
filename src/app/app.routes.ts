import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Categories } from './pages/categories/categories';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
     {path: '', component:Home},
     {path: 'products', component: Products},
     {path: 'categories', component: Categories},
     {path: 'about', component: About},
     {path: 'contact', component: Contact}
];
