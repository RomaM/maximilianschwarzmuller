import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  @ViewChild('form') form: NgForm;

  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    useremail: '',
    userquestion: '',
    useranswer: '',
    usergender: ''
  }
  submited = false;

  constructor() {}

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({ // Must include all keys: value
    //   userData: {
    //     username: suggestedName,
    //     useremail: ''
    //   },
    //   userquestion: 'pet',
    //   useranswer: '',
    //   usergender: 'male'
    // });

    this.signupForm.form.patchValue({ // overwriting part of the form
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.user.username = this.signupForm.value.userData.username;
    this.user.useremail = this.signupForm.value.userData.useremail;
    this.user.userquestion = this.signupForm.value.userquestion;
    this.user.useranswer = this.signupForm.value.useranswer;
    this.user.usergender = this.signupForm.value.gender;
    this.submited = true;

    this.signupForm.reset();
  }

  onSubmitForm() {
    console.log(this.form);
  }
}
