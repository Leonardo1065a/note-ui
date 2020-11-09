import { Note } from './../models/note.model';
import { NoteService } from './../services/note.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.scss']
})
export class ListNoteComponent implements OnInit {
  
  @Output() showForm = new EventEmitter;
  search: string;

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
  }

  addNote() {
    this.showForm.emit();
  }

  editNote(note: Note) {
    this._noteService.id = note.id;
    this.showForm.emit();
    
  }

  get service(): NoteService {
    return this._noteService;
  }

  remove(id: number) {
    this._noteService.removeNote(id);
  }



}
