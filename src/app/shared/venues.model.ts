export interface Venues {
  venueId: number;
  venueName: string;
  urlName: string;
  _links: {
    self:{
      href: string
    },
    venue:{
      href: string
    },
    banquetHalls:{
      href: string
    }
  }
}
