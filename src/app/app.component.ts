import { Component, OnInit, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  userForm !: FormGroup;
  constructor(public fb : FormBuilder) {}
  ngOnInit(): void {
    this.userForm = this.fb.group({
      email : [''],
      password:[''],
      address:[''],
      skills: this.fb.array([])
    })
    this.addSkill();
  }
   skills() : FormArray{
    return this.userForm.get('skills') as FormArray
  }
  newSkill() : FormGroup{
    return this.fb.group({
      skill:[''],
      exp:['']
    })
  }
  addSkill(){
    this.skills().push(this.newSkill())
  }
  removeSkill(i:number) {
    this.skills().removeAt(i);
  }
  onSubmit() {
    console.log(this.userForm.value);
  }
}
