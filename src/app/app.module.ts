import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { VenuesComponent } from './components/venues/venues.component';
import { VenueHotelsComponent } from './components/venues/venue-hotels/venue-hotels.component';
import { VendorsComponent } from './components/vendors/vendors.component';
import { VendorsListComponent } from './components/vendors/vendors-list/vendors-list.component';
import { VendorItemComponent } from './components/vendors/vendors-list/vendor-item/vendor-item.component';
import { HotelItemComponent } from './components/venues/venue-hotels/hotel-item/hotel-item.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HotelDetailsComponent } from './components/venues/venue-hotels/hotel-details/hotel-details.component';

@NgModule({
  declarations: [
    AppComponent,
    VenuesComponent,
    VenueHotelsComponent,
    HotelItemComponent,
    VendorsComponent,
    VendorsListComponent,
    VendorItemComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HotelDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
