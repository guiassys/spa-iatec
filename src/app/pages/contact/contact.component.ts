import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../../../styles.css']
})
export class ContactComponent {

  nome:string;
  email:string;
  mensagem:string;
  info:string;

  constructor(private router:Router,){
    this.nome="";
    this.email="";
    this.mensagem="";
    this.info = "";
  }

  sendForm():void{
    if(this.nome && this.email && this.mensagem){
      console.log("Formulário enviado");
      this.info="Agradecemos o seu contato!"
      setTimeout(()=>{
        this.nome="";
        this.email="";
        this.mensagem="";
        this.info = "";
        this.router.navigate(['home']);
      }, 3000);
    }
  }

}
