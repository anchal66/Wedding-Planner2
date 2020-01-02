import { Component, OnInit } from '@angular/core';
import { Hotels } from './hotels.model';

@Component({
  selector: 'app-venue-hotels',
  templateUrl: './venue-hotels.component.html',
  styleUrls: ['./venue-hotels.component.css']
})
export class VenueHotelsComponent implements OnInit {

  hotelsList: Hotels[] = [
    {
      title: 'Hotel1', address1: 'Delhi', address2: 'New Delhi', capacity: 1000, highlights: ['hello', 'High'],
      imgUrl: 'hello', price: 1000, rating: 5, zipCode: 500
    },
    {
      title: 'Hotel2', address1: 'Delhi', address2: 'New Delhi', capacity: 2000, highlights: ['hello', 'High'],
      imgUrl: 'hello', price: 1000, rating: 5, zipCode: 500
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
