import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-assignments';

  gameOutput = [];
  
  //following arrays are the solution, using these array for off & even componets using @input() there, not implemented like this
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onGameStarted(newCount: number) {
    // console.log('At the app component ', data.newCount);
    this.gameOutput.push(newCount);

    if (newCount % 2 === 0) {
      this.evenNumbers.push(newCount);
    } else {
      this.oddNumbers.push(newCount);
    }
  }
}
