export interface Event {
    id: number;
    name: string;
    date: string;
    time: string;
    price: number;
    iamgeUrl: string;
    location: {
      address: string,
      city: string,
      country: string
    };
}
