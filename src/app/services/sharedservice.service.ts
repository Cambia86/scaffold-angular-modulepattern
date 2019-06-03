import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  // https://my-json-server.typicode.com/typicode/demo/posts
  private demoUrl= "https://my-json-server.typicode.com/typicode"
  constructor(private http: HttpClient) { }

  gettest(){
    return this.http.get(this.demoUrl + '/demo/posts').pipe(
      map(res => { return res }));
  }
}
