import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plant } from './Plant';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private baseUrl = 'http://localhost:8080/api/v1/plants'; 

  constructor(private http: HttpClient) { }
getPlant(id: number): Observable<any> { return this.http.get(`${this.baseUrl}/${id}`);
}

createPlant(plant: Object): Observable<Object> { return this.http.post(`${this.baseUrl}`, plant);
}

updatePlant(id: number, value: any): Observable<Object> { return this.http.put(`${this.baseUrl}/${id}`, value);
}

deletePlant(id: number): Observable<any> {
return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
}

getPlantList(): Observable<any> { return this.http.get(`${this.baseUrl}`);
}
}