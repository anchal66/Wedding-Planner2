import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HotelsService } from 'src/app/services/hotels.service';
import { VenueServices } from 'src/app/services/venues.service';
import { Venues } from 'src/app/shared/venues.model';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  success=false;

  venueList: Venues[];

  constructor(private hotelsService: HotelsService, private venueService: VenueServices) { }

  ngOnInit() {
    this.getVenueList();
  }
  onPostHotel(form: NgForm) {
    console.log(form);
    console.log(form.value);
    // form.value.venue = 'http://localhost:8080/api/venues/1';
    this.hotelsService.PostHotel(form.value).subscribe(data=>{
      this.success=true;
      console.log(data);
    },
      error=>{
        this.success=false;
        console.log(error);
      }
    );
  }
  getVenueList() {
    this.venueService.getVenueList().subscribe(data => {this.venueList = data; console.log(data)},
      error => console.log(error));
  }

}
