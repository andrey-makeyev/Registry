import {Component, Injectable, Input, OnInit} from '@angular/core';
import { PersonService} from "../../services/person.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})

@Injectable()
export class RegistryComponent implements OnInit {

  firstName: any;

  models: string[] = [
    'Male',
    'Female'
  ];

  personForm!: FormGroup;
  validMessage: string = "";

  public people!: any;

  constructor(private personService: PersonService) {
  }

  Search() {
    if(this.firstName == "") {
      this.ngOnInit();
    } else {
      this.people = this.people.filter(res => {
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      } )
    }
  }

  submitRegistration() {

    if (this.personForm.valid) {
      this.validMessage = "Your registration has been submitted.";
      this.personService.createPersonRegistration(this.personForm.value).subscribe(
        data  => {
          this.personForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Fill the form before submitting.";
    }
  }

  ngOnInit() {
    this.personForm = new FormGroup(
      {
        personalId: new FormControl('', Validators.required),
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        gender: new FormControl('', Validators.required),
        dateOfBirth: new FormControl('', Validators.required)
      }
    );
    this.getPeople();
  }

  getPeople() {
    this.personService.getPeople().subscribe(
      data => {
        this.people = <any>data
      },
      err => console.error(err),
      () => console.log('People loaded.')
    );
  }
}
