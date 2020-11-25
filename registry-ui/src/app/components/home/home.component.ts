import { Component, OnInit } from '@angular/core';
import { PersonService } from "../../services/person.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Router} from "@angular/router";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  genders: string[] = [
    'Male',
    'Female'
  ];

  personForm!: FormGroup;
  validMessage: string = "";

  constructor(private personService: PersonService, private router: Router) {
}


  submitRegistration() {

  if (this.personForm.valid) {
    this.validMessage = "Your registration has been submitted.";
    this.personService.createPersonRegistration(this.personForm.value).subscribe(
      _data => {
        this.personForm.reset();
        return true;
      },
      error => {
        return Observable.throw(error);
      }
    )

    this.router.navigate(["administration"]);
  } else {
    this.validMessage = "Fill the form before submitting.";
  }
}

  ngOnInit() {
  this.personForm = new FormGroup({
      personalId: new FormControl(),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(),
      gender: new FormControl(),
      dateOfBirth: new FormControl()
    });
  }

}
