import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from "./table/table.component";
import { NotesComponent } from './Notes/notes.component';
import { TaskBoardComponent } from './taskboard/taskboard.component';
import {HttpClientModule} from '@angular/common/http';

import { ToDoListComponent } from './todolist/todolist.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DocumentsComponent } from './documents/documents.component';
import { NotesListComponent } from './Notes/notes-list/notes-list.component';
import { NotesCardComponent } from './Notes/notes-card/notes-card.component';
import { NotesDetailsComponent } from './Notes/notes-details/notes-details.component';

import { listplantsComponent } from './listplants/listplants.component';

import { PlantListComponent } from './listplants/plantlist/plantlist.component';
//import { PlantDetailsComponent } from './listplants/plant-details/plant-details.component'; 
import { CreatePlantComponent } from './listplants/create-plant/create-plant.component'; 
//import { UpdatePlantComponent  } from './listplants//update-plant/update-plant.component'; 




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    NgbdpaginationBasicComponent,
    NgbdAlertBasicComponent,
    NgbdDropdownBasicComponent,
    NgbdnavBasicComponent,
    ButtonsComponent,
    CreatePlantComponent,
    CardsComponent,
    TaskBoardComponent,
    NotesComponent,
    ToDoListComponent,
    ContactsComponent,
    DocumentsComponent,
    listplantsComponent,
    TableComponent,
    PlantListComponent,
    NotesListComponent,
    //PlantDetailsComponent,
    NotesCardComponent,
    //CreatePlantComponent,
    //UpdatePlantComponent,
    NotesDetailsComponent
  ]
})
export class ComponentsModule { }