export interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  price: number;
  imageUrl: string;
  onlineUrl?: string;
  location?: Location;
  sessions?: Session[];
}

export interface Location {
  address: string;
  city: string;
  country: string;
}


export interface Session {
  id: number;
  name: string;
  presenter: string;
  duration: number;
  level: string;
  abstract: string;
  voters: string[];
}

export interface Credential {
  userName: string;
  password: string;
}

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  firstName?: string;
  lastName?: string;
}
