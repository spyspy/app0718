import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { throwError, of, from, Observable, fromEvent } from 'rxjs';
import { retry, catchError, map, filter, scan, throttleTime, concatAll } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Object;
  metroArrives: Object;
  errormsg: string;
  abc: UserService;
  myJSON: string;
  constructor(private userlist: UserService) {

  }

  ngOnInit() {
    // 為什麼這邊可以直接抓到 userlist
    // this.userlist.ngOnInit().subscribe();
    // 必須有return值才可以訂閱( subscribe() )


    this.userlist.getUrl().subscribe(
      userlist => {
        this.users = userlist;
        console.log(this.users);
        return this.users;
      },
      // UserService =>this.users = UserService,
      error => this.errormsg = error
    );

    // this.userlist.getUrl().subscribe(
    //   (abc:UserService) => this.users = UserService
    // );

    this.userlist.getMetroArriaveUrl().pipe().subscribe(
      userlist => {
        this.metroArrives = userlist;
        console.log(this.metroArrives);
        console.log(JSON.stringify(this.metroArrives));
        console.log(JSON.parse(JSON.stringify(this.metroArrives)));

        return this.metroArrives = JSON.parse(JSON.stringify(this.metroArrives));
      },
      error => this.errormsg = error
    );


    // How to use RxJS

    // Print out: One by One
    const data = [1, 2, 3];
    from(data).subscribe(test => console.log(test));

    // Print out: The whole array
    const data2 = [333, 555, 777];
    of(data2).subscribe(num => console.log(num));

    // Formal Expression
    const data3 = ['koko', 'kiki', 'boyo'];
    of(data3).subscribe({
      next: function (value) {
        console.log(value);
      },
      complete: function () {
        console.log('complete!');
      },
      error: function (error) {
        console.log(error);
      }
    });

    //Button On the Screen
    //console.clear();
    let btn = document.querySelector('#wowBtn');
    fromEvent(btn, 'click')
    .pipe(throttleTime(1000),scan(count=>count+1,0))
    .subscribe((count) => console.log(`btn click event ${count} w`));
    
    let myinput = document.querySelector('#myinput');
    fromEvent(myinput, 'keyup')
    .pipe(throttleTime(1000),scan(count=>count+1,0))
    .subscribe((count) => console.log(`myinput keyup event ${count} w`));
  }

}
