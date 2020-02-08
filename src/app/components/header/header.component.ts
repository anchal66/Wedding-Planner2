import { Component, OnInit } from '@angular/core';
import { VenueServices } from 'src/app/services/venues.service';
import { Venues } from 'src/app/shared/venues.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  venueList: Venues[];

  constructor(private venueService: VenueServices) { }

  ngOnInit() {
    this.getVenueList();
  }
  getVenueList() {
    this.venueService.getVenueList().subscribe(data => this.venueList = data,
      error => console.log(error));
  }

}
