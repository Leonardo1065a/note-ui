import { NoteService } from './services/note.service';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ListNoteComponent } from './list-note/list-note.component';
import { FormNoteComponent } from './form-note/form-note.component';
import { FilterModule } from './pipes/filter/filter.module';

@NgModule({
  declarations: [
    AppComponent,
    ListNoteComponent,
    FormNoteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FilterModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

