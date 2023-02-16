import { Component, OnInit } from '@angular/core';
import { ExampleLibService } from '@harvve/example-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-regular-app';

  constructor(private exampleServiceFromPackage: ExampleLibService) {}

  ngOnInit(): void {
    this.title = this.exampleServiceFromPackage.getName();
  }
}
