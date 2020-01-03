import { Injectable, EventEmitter } from '@angular/core';
import { Hotels } from './hotels.model';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private hotels: Hotels[] = [
    {
      id: 1, title: 'Hotel1', address1: 'Delhi', address2: 'New Delhi', capacity: 1000, highlights: ['hello', 'High'],
      imgUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/10/00/09/a8/swimming-pool.jpg',
      price: 1000, rating: 5, zipCode: 500
    },
    {
      id: 2, title: 'Hotel2', address1: 'Delhi', address2: 'New Delhi', capacity: 2000, highlights: ['hello', 'High'],
      imgUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/10/00/09/a8/swimming-pool.jpg',
      price: 1000, rating: 5, zipCode: 500
    }
  ];

  hotelSelected = new EventEmitter<Hotels>();

  getHotelsList() {
    return this.hotels.slice();
  }
}
