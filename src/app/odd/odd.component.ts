import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.css'
})
export class OddComponent {
  @Input() oddNumber:number;

  checkForOdd() {
    return this.oddNumber / 2 === 0 ? false : true;
  }
}
