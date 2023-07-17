import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  newsList = [
    {
      title: 'Nova Descoberta Científica',
      content: 'Cientistas encontram evidências de vida em outro planeta.',
      image: 'https://via.placeholder.com/300'
    },
    {
      title: 'Lançamento do Novo Smartphone',
      content: 'Empresa X lança o mais novo smartphone com câmera de 108 MP.',
      image: 'https://via.placeholder.com/300'
    },
    {
      title: 'Recorde de Temperatura',
      content: 'Temperatura atinge 50 graus em cidade do deserto.',
      image: 'https://via.placeholder.com/300'
    },
  ];
}
