import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hobbies: string[] = ['Cooking', 'Sport'];
  newHobbyInput: string = '';
  hobbyWasDeleted = false;

  onNewHobby() {
    if (this.newHobbyInput.length)
    {
      this.hobbies.push(this.newHobbyInput);
      this.hobbyWasDeleted = false;
    }

  }

  onHobbyRemoved(hobby: string) {
    const position = this.newHobbyInput.indexOf(hobby);
    this.hobbies.splice(position, 1);
    this.hobbyWasDeleted = true;
  }
}
