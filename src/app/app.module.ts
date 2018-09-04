import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import {FormsModule} from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContactNewComponent } from './contact-new/contact-new.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ContactListComponent,
    ToolbarComponent,
    ContactNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
