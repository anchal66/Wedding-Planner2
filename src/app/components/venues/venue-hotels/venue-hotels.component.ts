import { Component, OnInit } from '@angular/core';
import { Hotels } from '../../../shared/hotels.model';

@Component({
  selector: 'app-venue-hotels',
  templateUrl: './venue-hotels.component.html',
  styleUrls: ['./venue-hotels.component.css']
})
export class VenueHotelsComponent implements OnInit {
  hotelsList: Hotels[];
  hotelSelected: Hotels;

  constructor() { }

  ngOnInit() {
  }

}
