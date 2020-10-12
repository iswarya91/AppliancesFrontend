import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApplianceListComponent } from "./appliance-list/appliance-list.component";
import { CreateApplianceComponent } from "./create-appliance/create-appliance.component";
import { UpdateApplianceComponent } from "./update-appliance/update-appliance.component";

const routes : Routes = [
  {path:'appliances', component: ApplianceListComponent},
  {path:'appliances/new', component:CreateApplianceComponent},
  {path:'update-appliance/:id', component: UpdateApplianceComponent},
  {path:'', redirectTo:'appliances', pathMatch:'full'},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {

}