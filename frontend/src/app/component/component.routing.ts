import { Routes } from '@angular/router';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';

import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { NotesComponent } from './Notes/notes.component';
import { TaskBoardComponent } from './taskboard/taskboard.component';
import { ToDoListComponent } from './todolist/todolist.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DocumentsComponent } from './documents/documents.component';
import { ListPlantsComponent } from './listplants/listplants.component';
import { CalendarComponent } from './calendar/calendar.component';



export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'table',
				component: TableComponent
			},
			{
				path: 'card',
				component: CardsComponent
			},
			{
				path: 'pagination',
				component: NgbdpaginationBasicComponent
			},
			{
				path: 'badges',
				component: BadgeComponent
			},
			{
				path: 'alert',
				component: NgbdAlertBasicComponent
			},
			{
				path: 'dropdown',
				component: NgbdDropdownBasicComponent
			},
			{
				path: 'nav',
				component: NgbdnavBasicComponent
			},
			{
				path: 'buttons',
				component: ButtonsComponent
			},
			{
				path: 'notes',
				component: NotesComponent
			},
			{
				path: 'taskboard',
				component: TaskBoardComponent
			},
			{
				path: 'todolist',
				component: ToDoListComponent
			},
			{
				path: 'contacts',
				component: ContactsComponent
			},
			{
				path: 'documents',
				component: DocumentsComponent
			},
			{
				path: 'listplants',
				component: ListPlantsComponent
			},
			{
				path: 'calendar',
				component: CalendarComponent
			}
		]
		
	}
];
