import {AppState, Contact} from './app.state';
import {contactPassFilter} from '../app.service';

export const appStore: AppState = {
  contacts: null,
  filteredContacts: null,
  filter: null,
};

initStore(appStore);

const operators = [];

export function initStore(store: AppState) {
  store.contacts = [
    {id: 1, name: "Ori"},
    {id: 2, name: "Roni"},
    {id: 3, name: "Udi"},
  ];

  store.filteredContacts = store.contacts.concat([]);
}

export function updateStore(store: AppState, changes: Partial<AppState>) {
  const ops = [];

  for(const key in changes) {
    const value = changes[key];

    if(typeof value == "function") {
      ops.push(()=> {
        store[key] = value(store[key]);
      });
    }
    else {
      store[key] = value;
    }
  }

  for(const op of ops) {
    op();
  }
}

export function DELETE(item): any {
  return function(items) {
    const index = items.indexOf(item);
    if(index != -1) {
      items.splice(index, 1);
    }

    return items;
  }
}

export function ADD(item): any {
  return function(items) {
    items.push(item);

    return items;
  }
}

export function ADD_IF(item, predicate): any {
  return function(items) {
    if(!predicate(item)) {
      return items;
    }

    items.push(item);

    return items;
  }
}

export function NOOP(): any {
  return function(x) {
    return x;
  }
}
