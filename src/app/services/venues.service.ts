import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotels } from '../shared/hotels.model';
import { map } from 'rxjs/operators';
import { Venues } from '../shared/venues.model';

@Injectable({
  providedIn: 'root'
})
export class VenueServices {

  private url = 'http://localhost:8080/api/venues';

  constructor(private http: HttpClient) { }

  getVenueList(): Observable<Venues[]> {
    return this.http.get<GetResponse>(this.url).pipe(
      map(response => response._embedded.venues)
    );
  }

  PostVenue(form) {
    this.http.post(this.url, form).subscribe(post => console.log(post),
      error => console.log(error));
  }
}
interface GetResponse {
  _embedded: {
    venues: Venues[];
  };
}
