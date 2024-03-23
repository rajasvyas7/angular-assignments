import { Component } from '@angular/core';

@Component({
  selector: 'app-third-assignment',
  templateUrl: './third-assignment.component.html',
  styleUrl: './third-assignment.component.css'
})
export class ThirdAssignmentComponent {
  isVisible = false;
  clickCount = 0;
  clickArr = [];

  toggleDetails() {
    this.isVisible = !this.isVisible;
    // this.clickArr.push(++this.clickCount);
    this.clickArr.push(new Date());
  }
}
