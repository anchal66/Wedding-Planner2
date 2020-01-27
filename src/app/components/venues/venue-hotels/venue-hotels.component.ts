import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/services/hotels.service';
import { Hotels } from 'src/app/shared/hotels.model';

@Component({
  selector: 'app-venue-hotels',
  templateUrl: './venue-hotels.component.html',
  styleUrls: ['./venue-hotels.component.css']
})
export class VenueHotelsComponent implements OnInit {

  hotels: Hotels[];

  constructor(private hotelService: HotelsService) { }

  ngOnInit() {
    this.listHotels();
  }

  listHotels() {
    this.hotelService.getHotelList().subscribe(
      data => {
        this.hotels = data;
      }
    );
  }
}
