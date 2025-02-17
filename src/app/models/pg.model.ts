export interface Room {
  roomNumber: number;
  sharing: number;
  vacantBeds: number;
  airCondition: boolean;
}

export interface Floors {
  floorNumber: number;
  numberOfRooms: number;
  numberOfBedsAvailable: number;
  numberOfAcBedsAvailable: number;
}

export interface Building {
  buildingName: string;
  buildingAddress: string;
  buildingContact: string;
  numberOfFloors: number;
  numberOfAvailableBeds: number;
}
