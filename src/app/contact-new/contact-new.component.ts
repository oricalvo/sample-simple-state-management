import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent implements OnInit {
  name: string;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  add() {
    this.appService.addContact(this.name);
  }

  onKeyDown($event) {
    if($event.which == 13) {
      this.add();
    }
  }
}
