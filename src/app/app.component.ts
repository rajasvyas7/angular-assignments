import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './services/user.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UserService]
})
export class AppComponent implements OnInit {
  title = 'angular-assignments';
  gameOutput = [];

  //following arrays are the solution, using these array for off & even componets using @input() there, not implemented like this
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  ddStatus = [
    { val: "", label: "Please select Project Status" },
    { val: 'stable', label: 'Stable' },
    { val: 'critical', label: 'Critical' },
    { val: 'finished', label: 'Finished' }
  ];
  //TD form
  @ViewChild("f") tdForm: NgForm;

  //reactive form
  projectForm: FormGroup;

  // users: Users[];
  // constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.forbiddenNames]),
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail),
      'status': new FormControl("", Validators.required)
    });
  }

  onGameStarted(newCount: number) {
    // console.log('At the app component ', data.newCount);
    this.gameOutput.push(newCount);

    if (newCount % 2 === 0) {
      this.evenNumbers.push(newCount);
    } else {
      this.oddNumbers.push(newCount);
    }
  }

  // submitting TD form
  frmTdSubmit() {
    if (this.tdForm.value.projectName.toLowerCase() === "test") {
      console.log('inside if', this.tdForm.form.controls['projectName']);
      this.tdForm.form.controls['projectName'].setErrors({ errorMsg: "Enter a valid project name." })
    }
    else {
      const submittedForm = this.obj2ArrConvertor(this.tdForm.value);
      console.log(submittedForm)
    }
  }

  // helper function
  obj2ArrConvertor(obj: Object) {
    let retArr = [];
    for (let [key, value] of Object.entries(obj)) {
      if (typeof value === 'object') {
        let arr = this.obj2ArrConvertor(value);
        retArr.push(...arr);
      }
      else {
        retArr.push({ 'key': key, 'value': value });
      }
    }
    return retArr;
  }

  //sumitting reactive form
  onReactiveFormSubmit() {
    console.log(this.projectForm.value);
  }

  //helper function to check validity
  checkValidity(field) {
    return this.projectForm.get(field).touched && this.projectForm.get(field).invalid;
  }

  //custome validator for reactive form elements
  forbiddenNames(control: FormControl): { [key: string]: boolean } {
    const cntrlVal = control.value || "";
    if (cntrlVal.toLowerCase() === 'test') {
      return { name_forbidden: true };
    }
    else {
      return null;
    }
  }

  // custom async validator for reactive form
  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const prmis = new Promise((resolve, reject) => {
      setTimeout(() => {
        const cntrlVal = control.value || "";
        if (cntrlVal.toLowerCase() === 'test@test.com') {
          resolve({ email_forbidden: true });
        }
        else {
          resolve(null);
        }
      }, 2000);
    });
    return prmis;
  }
}
