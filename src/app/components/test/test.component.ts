import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = 'Ramin';
  public siteUrl = window.location.href;
  public isDisabled = false;
  public classSuccess = 'success';
  public classes = {
    'success': this.isDisabled,
    'danger': !this.isDisabled,
    'special': true
  };
  public hasError = true;
  public highlightColor = 'orange';
  public titleStyle = {
    color: 'red',
    fontStyle: 'italic'
  };

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return 'Hello' + this.name;
  }

}