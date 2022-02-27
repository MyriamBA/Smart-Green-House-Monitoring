import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantListComponent } from './plantlist/plantlist.component';
import { listplantsComponent } from './listplants.component';
import { CreatePlantComponent } from './create-plant/create-plant.component';

const routes: Routes = [
  { path: '', component: listplantsComponent, children: [
    { path: 'plants', component: PlantListComponent },
    { path: 'add', component: CreatePlantComponent }

    
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }