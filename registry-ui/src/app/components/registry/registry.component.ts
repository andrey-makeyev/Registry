import {Component, Injectable, Input, OnInit} from '@angular/core';
import { PersonService} from "../../services/person.service";

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})

@Injectable()
export class RegistryComponent implements OnInit {

  public people!: any;

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
  this.personService.getPeople().subscribe(
     data => { this.people = <any>data },
    err => console.error(err),
    () => console.log('People loaded.')
    );
 }
}
