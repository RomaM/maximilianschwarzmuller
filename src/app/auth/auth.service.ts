import * as firebase from 'firebase';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  signupUser(email: any, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( msg => console.log(msg) )
      .catch(error => console.log(error) );
  }
}
