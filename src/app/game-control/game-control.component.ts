import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  counter: number = 0;
  repeater;
  @Output() gameStarted: EventEmitter<any> = new EventEmitter<number>();

  startGame() {
    this.repeater = setInterval(() => {
      this.gameStarted.emit(++this.counter);  
    }, 1500);
  }

  stopGame() {
    clearInterval(this.repeater);
  }
}
