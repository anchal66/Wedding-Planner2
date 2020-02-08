import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/services/hotels.service';
import { Hotels } from 'src/app/shared/hotels.model';
import { VenueServices } from 'src/app/services/venues.service';
import { Venues } from 'src/app/shared/venues.model';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-venue-hotels',
  templateUrl: './venue-hotels.component.html',
  styleUrls: ['./venue-hotels.component.css']
})
export class VenueHotelsComponent implements OnInit {

  venues: Venues[];
  venueSelected = 'Noida';
  hotels: Hotels[];
  AllHotels:Hotels[];

  constructor(private hotelService: HotelsService,
    private venueService: VenueServices,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        console.log(params.get('venues'));
        this.venueSelected = params.get('venues');
      }
    )
    this.listVenues();
    this.listHotels();
  }

  listHotels() {
    // this.hotelService.getHotelList().subscribe(
    //   data => {
    //     this.AllHotels = data;
    //     console.log(data)
    //   }
    // );
  }
  listVenues() {
    this.venueService.getVenueList().subscribe(
      data => {
        this.venues = data;
        console.log(data)
        for (let i = 0; i < data.length; i++) {
          if (data[i].venueName == "Noida") {
            let tempUrl = data[i]._links.banquetHalls.href
            this.venueService.getHotelsFromVenue(tempUrl).subscribe(data=>{
              this.hotels=data;
            },
            error=>console.log(error));
          }
        }
      }
    );
  }
  hotelSelected(hotel) {
    console.log(hotel)
    this.hotelService.hotelSelected = hotel;
  }
}
