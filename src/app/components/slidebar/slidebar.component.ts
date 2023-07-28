import { Component } from '@angular/core';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent {

  listMenu = [
    {
      label: 'Entrar',
      fontIcon: 'login',
      routerLink: 'login',
    },
    {
      label: 'Sair',
      fontIcon: 'logout',
      routerLink: 'logout',
    },
    {
      label: 'Home',
      fontIcon: 'home',
      routerLink: 'home',
    },
    {
      label: 'Sobre',
      fontIcon: 'info',
      routerLink: 'about',
    },
    {
      label: 'Contato',
      fontIcon: 'contact_page',
      routerLink: 'contact',
    },
    {
      label: 'Serviços',
      fontIcon: 'miscellaneous_services',
      routerLink: 'service',
    },
  ];

}
