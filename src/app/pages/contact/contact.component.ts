import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../../../styles.css']
})
export class ContactComponent {

  nome:string;
  email:string;
  mensagem:string;

  constructor(){
    this.nome="";
    this.email="";
    this.mensagem="";
  }

  sendForm():void{

    console.log("Formulário enviado");
    console.log(this.nome);
    console.log(this.email);
    console.log(this.mensagem);
  }
}
