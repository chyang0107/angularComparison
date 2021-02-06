import { Component, Input, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-username',
    template:`
        <p (click)="onUsernameClicked()">{{username}}</p>
    `
})

export class UsernameComponent{
  @Input() username = 'Kevin';
  userClicked = new EventEmitter<string>();
  onUsernameClicked() {
    this.userClicked.emit(this.username);
  }
}
