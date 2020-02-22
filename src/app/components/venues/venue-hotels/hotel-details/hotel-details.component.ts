import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HotelsService } from 'src/app/services/hotels.service';
import { Hotels } from 'src/app/shared/hotels.model';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnChanges {

  @Input() hotel: Hotels;

  constructor(private hotelService: HotelsService) { }

  ngOnChanges() {
  }
}
