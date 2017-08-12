import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { FormGroup , FormControl , FormBuilder , Validators} from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  formGroupLogin: FormGroup;
  @Output('submit') loginSubmit$: EventEmitter<any>;

  constructor( public formBuilder:FormBuilder) { }

  ngOnInit() {

    /* Simple facon

     this.formGroupLogin = new FormGroup({
     username: new FormControl(),
     password: new FormControl()
     });*/

    /* Meilleur facon */
    this.formGroupLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ''
    });

    /* set des valeurs par default

     this.formGroupLogin.setValue({
     username: 'Essai',
     password: 'Test'
     })
     */
  }

}
