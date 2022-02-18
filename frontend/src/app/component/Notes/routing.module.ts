import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesComponent } from './notes.component';

const routes: Routes = [
  { path: '', component: NotesComponent, children: [
    { path: '', component: NotesListComponent },
    { path: 'new', component: NotesListComponent },
    { path: ':id', component: NotesListComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }