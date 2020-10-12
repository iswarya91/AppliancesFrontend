import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ApplianceListComponent } from './appliance-list/appliance-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ApplianceService } from './appliance.service';
import { AppRoutingModule } from './app-routing-module';
import { CreateApplianceComponent } from './create-appliance/create-appliance.component';
import { UpdateApplianceComponent } from './update-appliance/update-appliance.component';
import { ApplianceListDataService } from './appliance-list-data.service';

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ApplianceListComponent, CreateApplianceComponent, UpdateApplianceComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ApplianceService, ApplianceListDataService]
})
export class AppModule { }
