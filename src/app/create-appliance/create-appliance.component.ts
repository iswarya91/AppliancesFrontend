import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appliance } from '../appliance';
import { ApplianceService } from '../appliance.service';

@Component({
  selector: 'app-create-appliance',
  templateUrl: './create-appliance.component.html',
  styleUrls: ['./create-appliance.component.css']
})
export class CreateApplianceComponent implements OnInit {

  appliance: Appliance = new Appliance();
  error:Boolean = false;
  errorMessage:String;

  constructor(private applianceService: ApplianceService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.applianceService.createAppliance(this.appliance).subscribe(
      (date)=> { console.log("Successfully created new appliance")
         this.router.navigate(['appliances']);
      }, (error)=> { 
        this.error = true;
      this.errorMessage = error.error.message;
      console.log("Error object");
      console.log(error.error.message);
        }
    );
  }

}