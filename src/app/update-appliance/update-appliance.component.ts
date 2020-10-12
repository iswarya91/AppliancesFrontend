import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appliance } from '../appliance';
import { ApplianceService } from '../appliance.service';

@Component({
  selector: 'app-update-appliance',
  templateUrl: './update-appliance.component.html',
  styleUrls: ['./update-appliance.component.css']
})
export class UpdateApplianceComponent implements OnInit {
  appliance: Appliance = new Appliance();
  id: number;
  error:Boolean = false;
  errorMessage:String;

  constructor(private route: ActivatedRoute, private applianceService: ApplianceService,
     private router: Router) { }

  ngOnInit() {
     this.id = this.route.snapshot.params['id'];
     this.applianceService.getAppliance(this.id).subscribe((data)=>{
       this.appliance = data;
     });
  }


  onSubmit(){
    console.log("submit clicked");
    this.applianceService.updateAppliance(this.id,this.appliance).subscribe((data)=>{
        console.log("Updated appliance");
        this.router.navigate(['/appliances']);

    }, (error)=>{
      this.error = true;
      this.errorMessage = error.error.message;
      console.log("Error object");
      console.log(error.error.message);
    });
  }

}