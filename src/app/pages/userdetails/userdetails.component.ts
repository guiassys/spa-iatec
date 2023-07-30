import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserdetailsModel } from 'src/app/pages/user/models/userdetails.model';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {

  subscription !: Subscription;
  selecteduser:UserdetailsModel= {id:0, name:'', email:'', phone:'', website:''};

  constructor(private shared:SharedService){
    this.subscription =  this.shared.getSelecteduser().subscribe((retorno : UserdetailsModel)=>{
      this.selecteduser=retorno;
    })
  }

}
