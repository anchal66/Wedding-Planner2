import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hotels } from '../hotels.model';
import { HotelsService } from '../hotels.service';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.css']
})
export class HotelItemComponent implements OnInit {
  @Input() hotelItem: Hotels;
  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
  }
  hotelSelected() {
    this.hotelsService.hotelSelected.emit(this.hotelItem);
  }

}
