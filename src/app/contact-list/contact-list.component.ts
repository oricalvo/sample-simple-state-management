import { Component, OnInit } from '@angular/core';
import {appStore} from '../store/app.store';
import {Contact} from '../store/app.state';
import {AppService} from '../app.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  constructor(private appService: AppService) { }

  get contacts() {
    return appStore.filteredContacts;
  }

  delete(contact: Contact) {
    this.appService.deleteContact(contact);
  }
}
