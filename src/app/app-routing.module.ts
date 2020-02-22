import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VenuesComponent } from './components/venues/venues.component';
import { VendorsComponent } from './components/vendors/vendors.component';
import { HotelDetailsComponent } from './components/venues/venue-hotels/hotel-details/hotel-details.component';
import { VenueHotelsComponent } from './components/venues/venue-hotels/venue-hotels.component';
import { AdminVenuesComponent } from './admin/components/admin-venues/admin-venues.component';
import { AdminHotelsComponent } from './admin/components/admin-hotels/admin-hotels.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin/venues', component:  AdminVenuesComponent},
  { path: 'admin/hotels', component:  AdminHotelsComponent},
  // { path: 'venues', component: VenuesComponent },
  { path: ':venues/hotels', component: VenuesComponent },
  { path: ':venues/:venueName/:+hotelid', component: HotelDetailsComponent },
  { path: 'vendors', component: VendorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
