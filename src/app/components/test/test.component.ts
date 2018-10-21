import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

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

  public onClick = '';
  public twoWayBinding = '';
  public intro2Angular = true;
  public color = 'black';
  public colors = ['red', 'black', 'white', 'blue'];

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();

  public pipeTutorial = 'Codevolution';
  public pipeMessage = 'Welcome to codevolution';
  public person = {
    'firstName': 'Ramin',
    'lastName': 'Ghaderi'
  };

  public date = new Date();

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return 'Hello' + this.name;
  }

  eventBinding() {
    console.log('Heleeee');
    this.onClick = 'Ramin';
  }

  templateReferenceVariableMethod(input) {
    console.log(input);
  }

  fireEvent() {
    this.childEvent.emit('Hey Ramin, I am coming from a child component');
  }

}
