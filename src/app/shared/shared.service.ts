import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../pages/user/models/user.model';
import { UserdetailsModel } from '../pages/userdetails/models/userdetails.model';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _username: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private _selecteduser: BehaviorSubject<UserdetailsModel> = new BehaviorSubject<UserdetailsModel>({id: 0, name:'', email:'', phone: '', website:''});
  constructor() { }

  isAuthenticated():boolean{
    let user=this._username.getValue();
    if(user){
      return true;
    }else{
      return false;
    }
  }

  setUsername(username: string){
    this._username.next(username);
  }

  getUsername(){
    return this._username.asObservable();
  }

  setSelecteduser(selecteduser: UserdetailsModel){
    this._selecteduser.next(selecteduser);
  }

  getSelecteduser(){
    return this._selecteduser.asObservable();
  }

}
