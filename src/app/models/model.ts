export interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  price: number;
  imageUrl: string;
  onlineUrl?: string
  location?: Location,
  sessions?: Session[]
}

export interface Location {
  address: string,
  city: string,
  country: string
}


export interface Session {
  id: number,
  name: string,
  presenter: string,
  duration: number,
  level: string,
  abstract: string,
  voters: string[]
}
