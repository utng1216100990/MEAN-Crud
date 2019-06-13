import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

import { NgForm } from '@angular/forms';
import { Users } from '../../models/users';

declare var M: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  addUser(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.userService.putUser(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getUsers();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.userService.postUser(form.value)
      .subscribe(res => {
        this.getUsers();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(res => {
        this.userService.users = res as Users[];
      });
  }

  editUser(user: Users) {
    this.userService.selectedUser = user;
  }

  deleteUser(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.userService.deleteUser(_id)
        .subscribe(res => {
          this.getUsers();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.userService.selectedUser = new Users();
    }
  }

}
