import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
 
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: []
  },
  
  {
    path: '/component/card',
    title: 'TaskBoard',
    icon: 'bi bi-ui-checks-grid',
    class: '',
    extralink: false,
    submenu: []
  },


  {
    path: '/component/notes',
    title: 'Notes',
    icon: 'bi bi-card-text',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/todolist',
    title: 'ToDo List',
    icon: 'bi bi-patch-check',
    class: '',
    extralink: false,
    submenu: []
  },
  
 

  {
    path: '/component/listplants',
    title: 'List of Plants',
    icon: 'bi bi-tree',
    class: '',
    extralink: false,
    submenu: []
  },


 
  {
    path: '/component/table',
    title: 'Contacts',
    icon: 'bi bi-people',
    class: '',
    extralink: false,

    submenu: []
  },
  {
    path: '/about',
    title: 'About',
    icon: 'bi bi-layout-split',
    class: '',
    extralink: false,
    submenu: []
  }
];
