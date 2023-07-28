import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css', '../../../styles.css']
})
export class ServiceComponent {

  services = [
    {
      title: 'Serviço de Desenvolvimento Web',
      description: 'Oferecemos soluções web personalizadas e inovadoras para atender às necessidades do seu negócio.',
      price: 'A partir de R$ 2.500,00',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Serviço de Consultoria em Tecnologia',
      description: 'Nossa equipe de especialistas em tecnologia está pronta para ajudar sua empresa a alcançar o sucesso.',
      price: 'A partir de R$ 1.800,00',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Serviço de Design Gráfico',
      description: 'Criamos identidades visuais únicas e criativas para sua marca se destacar no mercado.',
      price: 'A partir de R$ 1.200,00',
      image: 'https://via.placeholder.com/150'
    },
  ];

}
