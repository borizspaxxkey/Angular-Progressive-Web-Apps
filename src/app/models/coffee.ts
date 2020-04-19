export class Coffee {
  type: string;
  rating: number;
  notes: string;
  tastingRating: TastingRating;

  constructor(
    public name: string,
    public place: string,
    public location: PlaceLocation
  ) {

  }
}

export class PlaceLocation {

  constructor(
    public address: string = '',
    public city: string,
    public latitude: number = null,
    public longitude: number = null) {

  }

}

export class TastingRating {
  aroma: number;
  body: number;
  flavor: number;
  intensity: number;
  sweetness: number;
  aftertaste: number;
}
