import { Note } from './../models/note.model';
import { Injectable } from '@angular/core';

@Injectable()
export class NoteService {

  private _notes: Note[] = [];
  private _id: number;

  constructor() { }

  getNotes(): Note[] {
    return this._notes;
  }

  getById(id: number): Note{
    return this._notes.filter(note => note.id == id)[0];
  }

  addNote(note: Note) {
    this._notes.push(note);
    this._return();
  }

  removeNote(id: number){
    const index = this._notes.findIndex(note => note.id === id);
    if (index < 0) return console.log('Not found');
    this._notes.splice(index, 1);
    this._return();
  }

  updateNote(id: number, body: Note) {
    const index = this._notes.findIndex(note => note.id === id);
    this._notes[index] = {...body, id};
    this._return();
  }

  private _return(){
    console.log(this._notes);
  }

  set id(id: number) {
    this._id = id;
  }

  get id(): number {
    return this._id;
  }

}
