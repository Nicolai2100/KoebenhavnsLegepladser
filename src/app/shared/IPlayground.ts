export interface IPlayground {
  id: number;
  name: string;
  imagePath: string;
  toiletFacilities: boolean;
  streetName: string;
  streetNumber: number;
  commune: string;
  zipCode: number;
  toiletPosibilities: boolean;
  assignedUsers: [];
  events: [];
  messages: [];

}
