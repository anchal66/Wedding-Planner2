import { Injectable } from '@angular/core';
import { Hotels } from './venue-hotels/hotels.model';

@Injectable({
  providedIn: 'root'
})
export class VenueService {
  hotelsRepo: Hotels[] = [];
  constructor() { }

  addHotel(hotels: Hotels) {
    this.hotelsRepo.push(hotels);
  }
}
