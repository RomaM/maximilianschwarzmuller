import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  constructor(private http: Http) {}
  storeServer(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post(
    //   'https://http-test-ab7be.firebaseio.com/servers.json', servers, {headers: headers});
    return this.http.put(
      'https://http-test-ab7be.firebaseio.com/servers.json', servers,
      {headers: headers});
  }
  getServers() {
    return this.http.get('https://http-test-ab7be.firebaseio.com/servers.json')
      .pipe(
        map( (response: Response) => {
          const data = response.json();
          for (const server of <any>data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data;
        }),
        catchError( (error: Response) => {
          return throwError(error);
        })
      );
  }
  getAppName() {
    // return this.http.get('https://http-test-ab7be.firebaseio.com/appName.json');
    return this.http.get('https://http-test-ab7be.firebaseio.com/appName.json')
      .pipe( map( (response: Response) => {
      return response.json();
    }));
  }
}
