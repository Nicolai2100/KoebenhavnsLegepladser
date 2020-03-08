import {AddressModel} from './Address.model';

export class KinderGarden {
  public adress: AddressModel;
  public numOfEmployees: number;
  public employeeList: [];
  public events: [];
  public imagePath: string;

  public constructor(public name: string) {
  }
}
