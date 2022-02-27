import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import { Note } from './note.model';
import { NotesService } from './notes.services';

@Component({
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss'],
        //styleUrls: ['./notes.component.css']  add for css 

})
export class NotesComponent implements OnInit{

  notes: Note[] = new Array<Note>();
  filteredNotes: Note[] = new Array<Note>();
  //@ViewChild('filterInput') filterInputElRef: ElementRef<HTMLInputElement>;

    constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notes = this.notesService.getAll();
    this.filteredNotes = this.notes;
  }

  deleteNote(id : number){
    this.notesService.delete(id);
  }

  filter(query: string) {
    query = query.toLowerCase().trim();

    let allResults: Note[] = new Array<Note>();
    // split up the search query into individual words
    let terms: string[] = query.split(' '); // split on spaces
    // remove duplicate search terms
    terms = this.removeDuplicates(terms);
    // compile all relevant results into the allResults array
    terms.forEach(term => {
      let results: Note[] = this.relevantNotes(term);
      // append results to the allResults array
      allResults = [...allResults, ...results]
    });

    // allResults will include duplicate notes
    // because a particular note can be the result of many search terms
    // but we don't want to show the same note multiple times on the UI
    // so we first must remove the duplicates
    let uniqueResults = this.removeDuplicates(allResults);
    this.filteredNotes = uniqueResults;

    // now sort by relevancy
  }
  removeDuplicates(arr: Array<any>) : Array<any> {
    let uniqueResults: Set<any> = new Set<any>();
    // loop through the input array and add the items to the set
    arr.forEach(e => uniqueResults.add(e));

    return Array.from(uniqueResults);
  }

  relevantNotes(query: string) : Array<Note> {
    query = query.toLowerCase().trim();
    let relevantNotes = this.notes.filter(note => {
      if (note.title && note.title.toLowerCase().includes(query)) {
        return true;
      }
      if (note.body && note.body.toLowerCase().includes(query)) {
        return true;
      }
      return false;
    })

    return relevantNotes;
  }


}

