import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UsersInterface} from './users-interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  userRegistrationForm: any;
  url = 'http://localhost:8082/api/users';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.userRegistrationForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
    console.log(this);
  }

  createUser() {
    return this.http.post(this.url, this.userRegistrationForm.value);
  }

  registrate() {
    this.createUser().subscribe(response => {
    });
    console.log(this.userRegistrationForm.value);
  }
}
