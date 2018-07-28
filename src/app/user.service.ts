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
  testUrl: string

  constructor(private http: HttpClient) {
    this.myurl = 'https://jsonplaceholder.typicode.com/users';   // 正確
    // this.myurl = 'https://jsonplaceholder.typicode.com/usersx'; // 錯誤
    // this.myurl = 'https://jsonplaceholder.typicode.com/posts/1'; // POST
    // this.metroArriveUrl = 'http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=55ec6d6e-dc5c-4268-a725-d04cc262172b';
     this.metroArriveUrl = '/opendata/datalist/apiAccess?scope=resourceAquire&rid=55ec6d6e-dc5c-4268-a725-d04cc262172b';
    // "target": "http://data.taipei",
    // this.metroArriveUrl = 'http://data.ntpc.gov.tw/api/v1/rest/datastore/382000000A-000352-001';
    // this.metroArriveUrl = '/api/v1/rest/datastore/382000000A-000352-001';
// 資源網址: 
// http://data.ntpc.gov.tw/api/v1/rest/datastore/382000000A-000352-001
// 資源描述: 
// 新北市公共自行車租賃系統(YouBike)

    this.testUrl ='https://data.tycg.gov.tw/opendata/datalist/datasetMeta/download?id=5ca2bfc7-9ace-4719-88ae-4034b9a5a55c&rid=a1b4714b-3b75-4ff8-a8f2-cc377e4eaa0f';
    //http://data.ntpc.gov.tw/api/v1/rest/datastore/382000000A-000225-002
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
