import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VenuesComponent } from './components/venues/venues.component';
import { VendorsComponent } from './components/vendors/vendors.component';
import { HotelDetailsComponent } from './components/venues/venue-hotels/hotel-details/hotel-details.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'venues', component: VenuesComponent },
  { path: 'venues/:venueName/:+hotelid', component: HotelDetailsComponent },
  { path: 'vendors', component: VendorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
