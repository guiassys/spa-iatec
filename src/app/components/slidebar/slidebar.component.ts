import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent implements OnInit {

  usuarioLogado:string="";

  subscription !: Subscription;

  constructor(private shared:SharedService){}

  listMenu = [{label: '',fontIcon: '',routerLink: ''}];

  isAuth:boolean=false;

  ngOnInit(): void {
    this.subscription =  this.shared.getUsername().subscribe((retorno : string)=>{
      if(retorno){
        this.isAuth = true;
      }else{
        this.isAuth = false;
      }
      this.createMenu();
    })
  }

  createMenu(){
    if(this.isAuth){
      this.listMenu = [
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
    }else{
      this.listMenu = [
        {
          label: 'Entrar',
          fontIcon: 'login',
          routerLink: 'login',
        }
      ];
    }

  }

}
