import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  name = 'iFrame';
  url: string = 'https://www.google.com';
  urlSafe: SafeResourceUrl | undefined;

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit()  {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
