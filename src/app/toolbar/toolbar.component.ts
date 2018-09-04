import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  refresh() {
    this.appService.refresh();
  }
}
