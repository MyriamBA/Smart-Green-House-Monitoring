import { Injectable } from '@angular/core';
import { Note } from './note.model';
import { NgForm } from '@angular/forms';
//import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  //constructor(private webReqService: WebRequestService) { }
  notes:Note[]=new Array<Note>();

  getAll() {
    return this.notes;
  }

  get(id: number) {
    return this.notes[id];
  }

  getId(note:Note){
      return this.notes.indexOf(note);
  }

  add(note: Note) {
    // this method will add a note to the notes array
    //return this.webReqService.post('/notes', note);
    let newLenght=this.notes.push(note);
    //let index=newLenght-1;
    return true;
  }

  update(id:number, title:string,body:string) {
    let note = this.notes[id];
    note.title=title;
    note.body=body;
    //console.log(note);
    //return this.webReqService.patch('/notes/' + note._id, note);
  }

  emptyOrNot(note: Note) {
    if(this.add(note)) {
      return "";
    }
    return note;
  }

  delete(id: number) {
    return this.notes.splice(id,1);
  }
}