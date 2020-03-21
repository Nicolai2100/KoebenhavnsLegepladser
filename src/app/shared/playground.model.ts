import {AddressModel} from './address.model';

export class Playground {
  public numOfEmployees: number;
  public assignedUsers: [];
  public events: [ ];
  public messages: [ ];

  public constructor(
    public name: string,
    public imagePath: string,
    public toiletFacilities: boolean,
    public streetName: string,
    public streetNumber: number,
    public commune: string,
    public zipCode: number  ) {
  }
}
