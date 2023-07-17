import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:string;
  password:string;
  message:string;

  constructor(private router:Router){
    this.username="";
    this.password="";
    this.message="";
  }

  btnLogin():void{
    if(this.username==="admin" && this.password==="admin"){
      console.log("Autenticação realizada com sucesso");
      this.message="CORRETO!";
      this.router.navigate(['home']);
    }else{
      console.log("Autenticação realizada com falha");
      this.message="INCORRETO!";
    }
  }
}
