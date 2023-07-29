import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';
import { UserModel } from './models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css', './../../../styles.css']
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService){}

  dataSource:UserModel[] = [];

  userAdd:UserModel = new UserModel;

  ngOnInit(): void {
    this.dataSource=[];
    this.loadUsers();
  }

  loadUsers(){
    this.userService.getAll().subscribe((result:UserModel[])=>{
      this.dataSource=result;
    });
  }

  btnSearch(user:UserModel):void{
    this.userService.getById(user.id).subscribe((resultado:UserModel)=>{
      let json=JSON.stringify(resultado);
      alert(json);
    });

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
