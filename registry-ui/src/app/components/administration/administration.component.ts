import {Component, Injectable, OnInit} from '@angular/core';
import { PersonService} from "../../services/person.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})

@Injectable()
export class AdministrationComponent implements OnInit {

  firstName: any;

  public people!: any;

  constructor(private personService: PersonService) {
  }

  Search() {
    if(this.firstName == "") {
      this.ngOnInit();
    } else {
      this.people = this.people.filter(result => {
        return result.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      } )
    }
  }

  ngOnInit() {
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
