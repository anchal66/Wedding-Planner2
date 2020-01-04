import { Component, OnInit, Input } from '@angular/core';
import { HotelsService } from '../hotels.service';
import { Hotels } from '../hotels.model';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  @Input() hotelSelect: Hotels;
  test = false;
  hotels;

  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
    // this.hotelsService.hotelSelected.subscribe(
    //   (hotel: Hotels) => {
    //     console.log(hotel);
    //     console.log(this.hotelSelected);
    //     this.hotelSelected = hotel;
    //     console.log(this.hotelSelected);
    //   }
    // );
  }
}
