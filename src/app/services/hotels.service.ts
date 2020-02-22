import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotels } from '../shared/hotels.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  hotelSelected =new EventEmitter<Hotels>();

  private url = 'http://localhost:8080/api/banquet_halls';

  constructor(private http: HttpClient) { }

  getHotelList(): Observable<Hotels[]> {
    return this.http.get<GetResponse>(this.url).pipe(
      map(response => response._embedded.banquetHalls)
    );
  }
  PostHotel(form) {
    return this.http.post(this.url, form)
  }
}
interface GetResponse {
  _embedded: {
    banquetHalls: any[];
  };
}
