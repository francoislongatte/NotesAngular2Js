import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html'
})
export class FormCreateComponent implements OnInit {

  formGroupCreate: FormGroup;
  @Output() createSubmit$: EventEmitter<any>;

  constructor(public formBuilder: FormBuilder) {
    this.createSubmit$ = new EventEmitter();
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
    this.formGroupCreate = this.formBuilder.group({
      title: [null, Validators.required],
      text: [null, Validators.required]
    });

  }

  submit(note: any) {
    this.createSubmit$.emit(note);
  }

}
