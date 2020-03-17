import {AddressModel} from './address.model';

export class Playground {
  public numOfEmployees: number;
  public employeeList: [];

  public constructor(
    public name: string,
    public imagePath: string,
    public events: string[],
    public toiletFacilities: boolean,
    public adress: AddressModel) {
  }
}
