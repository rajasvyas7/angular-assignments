import { Component } from '@angular/core';

@Component({
  selector: 'app-second-assignment',
  templateUrl: './second-assignment.component.html',
  styleUrl: './second-assignment.component.css'
})
export class SecondAssignmentComponent {
  username = "";

  onResetUsername() {
    this.username = "";
  }
}
