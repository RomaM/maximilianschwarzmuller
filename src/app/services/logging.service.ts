import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class LoggingService {
  logStatusChange(data: any) {
    console.log(data);
  }
}
