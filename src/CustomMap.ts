import { User } from "./User";
import { Company } from "./Company";

export interface MarkableObj {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    const map = document.getElementById(divId);
    if (map !== null) {
      this.googleMap = new google.maps.Map(map, {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      });
    }
  }
  addMarker(markableObj: MarkableObj): void {
    const newMarker = new google.maps.Marker({
      map: this.googleMap,
      position: markableObj.location,
    });
    newMarker.addListener("click", () => {
      const inforWindow = new google.maps.InfoWindow({
        content: markableObj.markerContent(),
      });
      inforWindow.open(this.googleMap, newMarker);
    });
  }
}
