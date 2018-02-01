import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import{DashboardModule} from './dashboard/dashboard.module'

import {AppComponent} from './app.component';
import{HttpModule} from '@angular/http';
import{HttpClientModule} from '@angular/common/http';
// import{RouterModule, Routes} from '@angular/router';
import {CurrencyTableModule} from './dashboard/currency-table/currency-table.module';
import { CurrencyTableComponent } from './dashboard/currency-table/currency-table.component';
import {PersonService} from './shared-service/person.service';

// const appRoutes:Routes=[
//   {path:'op', component:CurrencyTableComponent}
// ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    DashboardModule,
    HttpModule,
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
