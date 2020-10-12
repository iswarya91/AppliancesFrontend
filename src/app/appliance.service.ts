import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Appliance } from './appliance';

@Injectable({
  providedIn: 'root'
})
export class ApplianceService {
  private appliances: Appliance[];
  private baseURL = "https://localhost:8080/appliances"

  constructor(private httpClient:HttpClient) { }


  getApplianceList():Observable<Appliance[]> {
    return this.httpClient.get<Appliance[]>(`${this.baseURL}`);
  }

  createAppliance(appliance: Appliance):Observable<Object> {
    console.log("sending http post request");
    console.log(appliance);
    return this.httpClient.post<Object>(`${this.baseURL}`, appliance);
  }

  getAppliance(id: number):Observable<Appliance> {
     return this.httpClient.get<Appliance>(`${this.baseURL}/` + id);
  }

  updateAppliance(id:number, appliance: Appliance):Observable<Object>  {
     console.log("Update appliance submitted");
     return this.httpClient.put<Object>(`${this.baseURL}/${id}`, appliance);
  }

  deleteAppliance(id:number):Observable<Boolean> {
    return this.httpClient.delete<Boolean>(`${this.baseURL}/${id}`);
  }
  

}