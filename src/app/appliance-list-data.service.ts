import { Injectable } from '@angular/core';
import { Appliance } from './appliance';

@Injectable()
export class ApplianceListDataService {
  appliances: Appliance[];

  constructor() { }

  setApplianceList(appliances:Appliance[]) {
    console.log("Setting the appliance list in data service");
    this.appliances = appliances;
  }


  getApplianceList(): Appliance[] {
    return this.appliances;
  }

  getApplianceUsingId(serialNumber: String) : Appliance {
   this.appliances.forEach(function(appliance:Appliance){
     if(serialNumber === appliance.serialNumber) {
       return appliance;
     }
   });
   return null;

  }

  updateAppliance(serialNumber: String, newAppliance: Appliance) {
    let oldAppliance = this.getApplianceUsingId(serialNumber);
    oldAppliance = newAppliance;
  }

}