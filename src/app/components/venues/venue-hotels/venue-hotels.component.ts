import { Component, OnInit } from '@angular/core';
import { Hotels } from './hotels.model';
import { HotelsService } from './hotels.service';

@Component({
  selector: 'app-venue-hotels',
  templateUrl: './venue-hotels.component.html',
  styleUrls: ['./venue-hotels.component.css']
})
export class VenueHotelsComponent implements OnInit {
  hotelsList: Hotels[];
  hotelSelected: Hotels;

  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    this.hotelsList = this.hotelsService.getHotelsList();
    this.hotelsService.hotelSelected.subscribe(
      (hotel: Hotels) => {
        this.hotelSelected = hotel;
      }
    );
  }

}
