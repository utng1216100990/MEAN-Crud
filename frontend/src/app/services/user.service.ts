import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: Users;
  users: Users[];
  readonly URL_API = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {
      this.selectedUser = new Users();
   }

   getUsers() {
    return this.http.get(this.URL_API);
  }

  postUser(users: Users) {
    return this.http.post(this.URL_API, users);
  }

  putUser(users: Users) {
    return this.http.put(this.URL_API + `/${users._id}`, users);
  }

  deleteUser(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
