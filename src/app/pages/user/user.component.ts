import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';
import { UserModel } from './models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmdialogComponent } from 'src/app/components/confirmdialog/confirmdialog.component';
import { UserdetailsComponent } from '../userdetails/userdetails.component';
import { SharedService } from 'src/app/shared/shared.service';
import { UserdetailsModel } from '../userdetails/models/userdetails.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css', './../../../styles.css']
})
export class UserComponent implements OnInit {

  constructor(
    private userService:UserService,
    private dialog: MatDialog,
    private shared: SharedService,
  ){}

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

  openConfirmationDialog(user:UserModel) {
    const dialogRef = this.dialog.open(ConfirmdialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Usuário confirmou a ação.');
        this.btnDelete(user);
      } else {
        console.log('Usuário cancelou a ação.');
      }
    });
  }

  openShowDetailsDialog(user:UserModel) {

    const dialogRef = this.dialog.open(UserdetailsComponent);
      // recupera informações do usuário selecionado
      this.userService.getUserDetailById(user.id).subscribe((resultado:UserdetailsModel)=>{
      // colocar o usuário no serviço de compartilhameto
      this.shared.setSelecteduser(resultado);
    });



    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Usuário confirmou a ação.');
      } else {
        console.log('Usuário cancelou a ação.');
      }
    });
  }

}
