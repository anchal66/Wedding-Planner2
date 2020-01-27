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
import { HttpClientModule } from '@angular/common/http';
import { AddVenueComponent } from './admin/components/admin-venues/add-venue/add-venue.component';
import { AdminVenuesComponent } from './admin/components/admin-venues/admin-venues.component';
import { FormsModule } from '@angular/forms';
import { AddHotelComponent } from './admin/components/admin-hotels/add-hotel/add-hotel.component';
import { AdminHotelsComponent } from './admin/components/admin-hotels/admin-hotels.component';

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
    AddVenueComponent,
    AdminVenuesComponent,
    AddHotelComponent,
    AdminHotelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
