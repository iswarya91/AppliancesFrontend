import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appliance } from '../appliance';
import { ApplianceListDataService } from '../appliance-list-data.service';
import { ApplianceService } from '../appliance.service';

@Component({
  selector: 'appliance-list',
  templateUrl: './appliance-list.component.html',
  styleUrls: ['./appliance-list.component.css']
})
export class ApplianceListComponent implements OnInit {
  appliances: Appliance[];

  serialNumber: String;
  brand: String;
  model: String;
  status: String;
  date: Date;

  constructor(private applianceService: ApplianceService, private router:Router, private applianceListDataService: ApplianceListDataService) { }

  ngOnInit() {
    this.getApplianceListFromServer();
  }

 getApplianceListFromServer() {
  this.applianceService.getApplianceList().subscribe(data => {
    this.appliances = data;
    // Set Local data store
    this.applianceListDataService.setApplianceList(data);
  }, (error) => {                              //Error callback
          console.error('error caught in component')
          console.log(error);
    
          //throw error;   //You can also throw the error to a global error handler
        });
}

updateAppliance( id: number) {
    console.log("update clicked for " + id);
    this.router.navigate(['update-appliance/' , id ]);
}

deleteAppliance(id: number) {
   this.applianceService.deleteAppliance(id).subscribe((data)=> {
     console.log("Appliance with serialNumber " + id + " deleted ");
     this.getApplianceListFromServer();
   });
}

getAppliance(serialNumber: String): Appliance {
   this.appliances.forEach(function(appliance:Appliance){
     if(serialNumber === appliance.serialNumber) {
       return appliance;
     }
   });
   return null;
}

SearchOnSerialNumber() {
  if(this.serialNumber == "") {
      this.appliances = this.applianceListDataService.getApplianceList();
  } else {
    this.appliances = this.appliances.filter(res => {
      return res.serialNumber.toLocaleLowerCase().match(this.serialNumber.toLocaleLowerCase())
    })
  }
}

SearchOnBrand() {
  if(this.brand == "") {
    this.appliances = this.applianceListDataService.getApplianceList();
  } else {
    this.appliances = this.appliances.filter(res => {
      return res.brand.toLocaleLowerCase().match(this.brand.toLocaleLowerCase())
    })
  }
}

SearchOnModel() {
  if(this.model == "") {
    this.appliances = this.applianceListDataService.getApplianceList();
  } else {
    this.appliances = this.appliances.filter(res => {
      return res.model.toLocaleLowerCase().match(this.model.toLocaleLowerCase())
    })
  }
}

SearchOnStatus() {
  if(this.status == "") {
    this.appliances = this.applianceListDataService.getApplianceList();
  } else {
    this.appliances = this.appliances.filter(res => {
      return res.status.toLocaleLowerCase().match(this.status.toLocaleLowerCase())
    })
  }
}


SearchOnDate() {

  if(this.date == null) {
    this.appliances = this.applianceListDataService.getApplianceList();
  } else {
    this.appliances = this.appliances.filter(res => {
      return res.date == this.date;
    })
  }
  
}




}