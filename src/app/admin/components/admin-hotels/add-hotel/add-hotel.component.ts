import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  constructor(private hotelsService: HotelsService) { }

  ngOnInit() {
  }
  onPostHotel(form: NgForm) {
    console.log(form);
    console.log(form.value);
    form.value.venue = 'http://localhost:8080/api/venues/1';
    this.hotelsService.PostHotel(form.value);
  }

}
