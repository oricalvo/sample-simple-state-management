import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  name: string;

  constructor(private appService: AppService) { }

  filter() {
    this.appService.filter(this.name);
  }

  onKeyDown($event) {
    if($event.which == 13) {
      this.filter();
    }
  }
}
