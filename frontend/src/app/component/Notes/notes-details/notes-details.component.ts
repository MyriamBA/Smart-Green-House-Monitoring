import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from '../note.model';
import { NotesService } from '../notes.services';
//import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-notes-details',
  templateUrl: './notes-details.component.html',
  styleUrls: ['./notes-details.component.scss']
})
export class NotesDetailsComponent implements OnInit {

  note!:Note;
  noteId!:number;
  new!:boolean;
  constructor(private noteService: NotesService,private router:Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.note = new Note();
    /*this.route.params.subscribe((params:Params)=>{
      this.note = new Note();
      if (params.id){
        this.note = this.noteService.get(params.id);
        this.noteId = params.id;
        this.new = false;
      }else{
        this.new = true;
      }
    })*/
  }
  onSubmit(form: NgForm) {
    /*if(this.new){
      this.noteService.add(form.value);
    }else{
      this.noteService.update(this.noteId,form.value.title,form.value.body); 
    }
  }*/
  this.noteService.add(form.value)
}
}
