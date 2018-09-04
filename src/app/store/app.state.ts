export interface AppState {
  filter: string;
  contacts: Contact[];
  filteredContacts: Contact[];
}

export interface Contact {
  id: number;
  name: string;
}
