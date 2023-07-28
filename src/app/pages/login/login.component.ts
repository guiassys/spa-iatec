import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../styles.css']
})
export class LoginComponent {

  username:string;
  password:string;
  message:string;

  constructor(private router:Router, private shared:SharedService){
    this.username="";
    this.password="";
    this.message="";
  }

  btnLogin():void{
    if((this.username==="guilherme.assis" || this.username==="admin")  && this.password==="admin"){
      console.log("Autenticação realizada com sucesso");
      this.message="CORRETO!";
      this.shared.setUsername(this.username);
      this.router.navigate(['home']);
    }else{
      console.log("Autenticação realizada com falha");
      this.shared.setUsername("");
      this.message="INCORRETO!";
    }
  }
}
