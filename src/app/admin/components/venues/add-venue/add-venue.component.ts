import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { VenueServices } from 'src/app/services/venues.service';

@Component({
  selector: 'app-add-venue',
  templateUrl: './add-venue.component.html',
  styleUrls: ['./add-venue.component.css']
})
export class AddVenueComponent implements OnInit {

  constructor(private venueService: VenueServices) { }

  ngOnInit() {
  }

  onPostVenue(form: NgForm) {
    const formVal = form.value;
    console.log(formVal);
    this.venueService.PostVenue(formVal);
    form.reset();

  }
}
