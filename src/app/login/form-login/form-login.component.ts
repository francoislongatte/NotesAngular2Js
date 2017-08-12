import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html'
})
export class FormLoginComponent implements OnInit {

  formGroupLogin: FormGroup;
  @Output() loginSubmit$: EventEmitter<any>;

  constructor(public formBuilder: FormBuilder) {
    this.loginSubmit$ = new EventEmitter();
  }

  ngOnInit() {

    /*

       Simple facon

       this.formGroupLogin = new FormGroup({
       username: new FormControl(),
       password: new FormControl()
       });

       set des valeurs par default

       this.formGroupLogin.setValue({
       username: 'Essai',
       password: 'Test'
       })
     */

    /* Meilleur facon */
    this.formGroupLogin = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });

  }

  submit(person: any) {
    this.loginSubmit$.emit(person);
  }

}
