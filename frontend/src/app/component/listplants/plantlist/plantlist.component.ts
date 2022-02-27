
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { PlantService } from '../Plant.services';
import { Plant } from '../Plant';

@Component({
    selector: 'app-plantlist',

    templateUrl: './plantlist.component.html',
     styleUrls: ['./plantlist.component.css']     

})



 
export class PlantListComponent implements OnInit {
plants?: Observable<any>;

constructor(private plantService: PlantService, private router: Router) {

}

ngOnInit() { this.reloadData();
}

reloadData() {
this.plants= this.plantService.getPlantList();
}

deletePlant(id: number) {   this.plantService.deletePlant(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
}

plantDetails(id: number){ this.router.navigate(['details', id]);
}

updatePlant(id: number){
    this.router.navigate(['update', id]);
  }
}
