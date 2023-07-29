import { Component, OnInit } from '@angular/core';
import { UserModel } from './models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css', './../../../styles.css']
})
export class UserComponent implements OnInit {

  dataSource:UserModel[] = [];

  userAdd:UserModel = new UserModel;

  ngOnInit(): void {
    this.dataSource=[
      {
        id: 0,
        name: 'teste',
        email: 'teste@email.com'
      },
      {
        id: 1,
        name: 'guilherme',
        email: 'guilherme@email.com'
      },
    ]
  }

  btnSearch(user:UserModel):void{
    alert("Buscando");
  }

  btnDelete(user:UserModel):void{
    let index = this.dataSource.findIndex((item)=> item==user);
    this.dataSource.splice(index,1);
    this.dataSource = Array.from(this.dataSource);
  }

  btnSave():void{
    if(this.userAdd.name){
      let user:UserModel = new UserModel;
      user.name = this.userAdd.name;
      user.email = this.userAdd.email;
      this.dataSource.push(user);
      this.dataSource = Array.from(this.dataSource);
      this.clearForm();
    }
  }

  clearForm():void{
    this.userAdd.name = "";
    this.userAdd.email = "";
  }



}
