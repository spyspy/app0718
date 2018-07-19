import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
// import { Observable, throwError} from 'rxjs';
// import { retry, catchError,} from 'rxjs/operators';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Object;
  errormsg: string;
  abc:UserService;
  constructor(private userlist:UserService) { 

  }

  ngOnInit() {
    //要少用嗎???
    //為什麼這邊可以直接抓到 userlist
    //this.userlist.ngOnInit().subscribe();
    this.userlist.getUrl().subscribe(
      userlist => this.users = userlist,
      //UserService =>this.users = UserService,
      error => this.errormsg = error
    );

    // this.userlist.getUrl().subscribe(
    //   (abc:UserService) => this.users = UserService
    // );
  }

}
