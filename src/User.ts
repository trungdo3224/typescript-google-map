import faker from "faker";
import { MarkableObj } from "./CustomMap";

export class User implements MarkableObj {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `<h1>${this.name}</h1>`;
  }
}
