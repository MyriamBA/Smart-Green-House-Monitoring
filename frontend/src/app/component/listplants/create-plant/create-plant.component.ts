import { PlantService } from '../Plant.services';
 import { Plant } from '../Plant';


import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

@Component({
   selector: 'app-create-plant',

   templateUrl: './create-plant.component.html',
    styleUrls: ['./create-plant.component.css']    
})
export class CreatePlantComponent implements OnInit {
 plant : Plant = new Plant();

submitted = false;

constructor(private plantService: PlantService, private router: Router) {
   }

ngOnInit() {
}
newAccount(): void {
   this.submitted = false;
    this.plant = new Plant();
 }



save() {
 
   this.plantService
   .createPlant(this.plant).subscribe(data => {
     console.log(data)
     this.plant = new Plant();
     this.gotoList();
   }, 
   error => console.log(error));
}


onSubmit() { this.submitted = true; this.save();
}

gotoList() { this.router.navigate(['/Plant']);
}
}
