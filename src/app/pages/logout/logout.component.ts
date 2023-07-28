import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css', '../../../styles.css']
})
export class LogoutComponent {

  constructor(private router:Router, private shared:SharedService){}

  btnLogout():void{
      console.log("Logout realizado com sucesso");
      this.shared.setUsername('');
      this.router.navigate(['login']);
  }

}
