import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './services/user.service';
import { NgForm } from '@angular/forms';

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

  ddStatus = [
    {val: "", label: "Please select Project Status"},
    {val: 'stable', label: 'Stable'},
    {val: 'critical', label: 'Critical'},
    {val: 'finished', label: 'Finished'}
  ];
  @ViewChild("f") tdForm: NgForm;

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

  frmTdSubmit() {
    if (this.tdForm.value.projectName.toLowerCase() === "test") {
      console.log('inside if', this.tdForm.form.controls['projectName']);
      this.tdForm.form.controls['projectName'].setErrors({errorMsg: "Enter a valid project name."})
    }
    else {
      const submittedForm = this.obj2ArrConvertor(this.tdForm.value);
      console.log(submittedForm)
    }
  }

  obj2ArrConvertor(obj: Object) {
    let retArr = [];
    for (let [key, value] of Object.entries(obj)) {
      if (typeof value === 'object') {
        let arr = this.obj2ArrConvertor(value);
        retArr.push(...arr);
      }
      else {
        retArr.push({'key': key, 'value': value});
      }
    }
    return retArr;
  }
}
