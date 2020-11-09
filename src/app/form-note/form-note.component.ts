import { NoteService } from './../services/note.service';
import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-note',
  templateUrl: './form-note.component.html',
  styleUrls: ['./form-note.component.scss']
})
export class FormNoteComponent implements OnDestroy {

  @Output() comeBack = new EventEmitter;
  form: FormGroup;
  idNote: number;

  constructor(private _service: NoteService, private _fb: FormBuilder) {
    this.buildForm();
    if(_service.id !== null && _service.id !== undefined){
      this.idNote = _service.id;
      this.form.patchValue(_service.getById(_service.id))}
   }

  buildForm() {
    this.form = this._fb.group({
      title: [null, Validators.required],
      body: [null],
    });
  }

  save() {
    if(this.form.invalid) return console.log('form invalido');
    this._service.addNote({
      ...this.form.getRawValue(), 
      id: new Date().getUTCMilliseconds()
    });
    this.cancel();
  }

  edit() {
    this._service.updateNote(this.idNote, this.form.getRawValue());
    this.cancel();
  }

  cancel() {
    this.comeBack.emit();
  }

  ngOnDestroy() {
    this._service.id = null;
  }

}
