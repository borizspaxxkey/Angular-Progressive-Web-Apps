export class Coffee {
  type: string;
  rating: number;
  notes: string;
  tastingRating: TastingRating;

  constructor(
    public name: string = '',
    public place: string = '',
    public location: PlaceLocation = null
  ) {
    this.location = new PlaceLocation();
    this.tastingRating = new TastingRating();
  }
}

export class PlaceLocation {

  constructor(
    public address: string = null,
    public city: string = null,
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
