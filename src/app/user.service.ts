import { Injectable, OnInit } from '@angular/core';
// 剛剛加入HttpClientModule後，實際在這裡使用....HttpClient etc
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  configUrl = 'assets/config.json';
  myurl: string;

  constructor(private wow: HttpClient) {
    this.myurl = 'https://jsonplaceholder.typicode.com/users';   // 正確
    // this.myurl = 'https://jsonplaceholder.typicode.com/usersx'; // 錯誤
    // this.myurl = 'https://jsonplaceholder.typicode.com/posts/1'; // POST
  }
  getConfig() {
    return this.wow.get(this.configUrl);
  }

  ngOnInit() {
    console.log(this.wow.get(this.configUrl));
    return this.wow.get(this.configUrl);
  }

  // 注意!! 要有return 才可以subscribe() 訂閱
  getUrl() {
    return this.wow.get(this.myurl);
  }


}
