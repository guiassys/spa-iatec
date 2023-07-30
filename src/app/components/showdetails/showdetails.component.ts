import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/pages/user/models/user.model';
import { UserdetailsModel } from 'src/app/pages/user/models/userdetails.model';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent {

  subscription !: Subscription;
  selecteduser:UserdetailsModel= {id:0, name:'', email:'', phone:'', website:''};

  constructor(private shared:SharedService){
    this.subscription =  this.shared.getSelecteduser().subscribe((retorno : UserdetailsModel)=>{
      this.selecteduser=retorno;
    })
  }

}
