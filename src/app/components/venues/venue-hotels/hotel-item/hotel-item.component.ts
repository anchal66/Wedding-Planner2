import { Component, OnInit, Input } from '@angular/core';
import { Hotels } from '../hotels.model';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.css']
})
export class HotelItemComponent implements OnInit {
  @Input() hotelItem: Hotels;
  constructor() { }

  ngOnInit() {
  }

}
