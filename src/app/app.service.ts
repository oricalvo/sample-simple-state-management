import { Injectable } from '@angular/core';
import {ADD, ADD_IF, appStore, DELETE, NOOP, updateStore} from './store/app.store';
import {Contact} from './store/app.state';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor() { }

  filter(name: string) {
    console.log("filter", name);

    updateStore(appStore, {
      filter: name,
      filteredContacts: FILTER_CONTACTS(),
    });
  }

  deleteContact(contact: Contact) {
    updateStore(appStore, {
      contacts: DELETE(contact),
      filteredContacts: DELETE(contact),
    });
  }

  refresh() {
    const contacts = [
      {id: 1, name: "Ori"},
      {id: 2, name: "Roni"},
      {id: 3, name: "Udi"},
    ];

    updateStore(appStore, {
      contacts,
      filteredContacts: FILTER_CONTACTS(),
    });
  }

  addContact(name: string) {
    const contact = {
      id: -1,
      name,
    };

    updateStore(appStore, {
      contacts: ADD(contact),
      filteredContacts: ADD_IF(contact, contactPassFilter)
    });
  }
}

export function contactPassFilter(contact: Contact) {
  const store = appStore;

  if(!store.filter) {
    return true;
  }

  const filter = store.filter.toLowerCase();
  return contact.name.toLowerCase().includes(filter);
}

export function FILTER_CONTACTS(): any {
  return function () {
    const store = appStore;
    const filter = store.filter && store.filter.toLowerCase();

    if(!filter) {
      return store.contacts;
    }

    return store.contacts.filter(contactPassFilter);
  }
}
