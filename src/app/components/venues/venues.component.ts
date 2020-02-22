import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/services/hotels.service';
import { Hotels } from 'src/app/shared/hotels.model';

@Component({
  selector: 'app-venue',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent implements OnInit {

  hotelSelected: Hotels;

  constructor(private hotelService: HotelsService) { }

  ngOnInit() {
    this.hotelService.hotelSelected.subscribe(data=>{
      console.log("Selected:",data)
      this.hotelSelected=data;
    })
  }

}
