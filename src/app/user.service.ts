import { Injectable, OnInit } from '@angular/core';
// 剛剛加入HttpClientModule後，實際在這裡使用....HttpClient etc
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  configUrl = 'assets/config.json';
  myurl: string;
  metroArriveUrl: string;

  constructor(private http: HttpClient) {
    this.myurl = 'https://jsonplaceholder.typicode.com/users';   // 正確
    // this.myurl = 'https://jsonplaceholder.typicode.com/usersx'; // 錯誤
    // this.myurl = 'https://jsonplaceholder.typicode.com/posts/1'; // POST
    // this.metroArriveUrl = 'http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=55ec6d6e-dc5c-4268-a725-d04cc262172b';
    // this.metroArriveUrl = 'http://data.ntpc.gov.tw/api/v1/rest/datastore/382000000A-000352-001';
    this.metroArriveUrl = '/opendata/datalist/apiAccess?scope=resourceAquire&rid=55ec6d6e-dc5c-4268-a725-d04cc262172b';

  }
  getConfig() {
    return this.http.get(this.configUrl);
  }

  ngOnInit() {
    console.log(this.http.get(this.configUrl));
    return this.http.get(this.configUrl);
  }

  // 注意!! 要有return 才可以subscribe() 訂閱
  // HttpClient 的 get 方法會產生一個 observable物件
  getUrl() {
    return this.http.get(this.myurl);
  }

  getMetroArriaveUrl() {
    return this.http.get(this.metroArriveUrl);
  }

}
