import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hobbies: string[] = ['Cooking', 'Sport'];
  newHobbyInput: string = '';
  onNewHobby() {
    this.hobbies.push(this.newHobbyInput);
  }
}
