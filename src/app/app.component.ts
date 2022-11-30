import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = "";

  resetUserName() {
    this.username = "";
  }

  validateUsername(usernameToTest: string) {
    if(usernameToTest == "") {
      return false;
    }
    return true;
  }
}
