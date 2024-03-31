import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UserService]
})
export class AppComponent implements OnInit{
  title = 'angular-assignments';

  gameOutput = [];
  
  //following arrays are the solution, using these array for off & even componets using @input() there, not implemented like this
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  // users: Users[];
  // constructor(private userService: UserService) {}

  ngOnInit(): void {}


  

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
