import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  constructor(private http: Http) {}
  storeServer(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(
      'https://http-test-ab7be.firebaseio.com/servers.json', servers, {headers: headers});
  }
  getServers() {
    return this.http.get('https://http-test-ab7be.firebaseio.com/servers.json');
  }
}
