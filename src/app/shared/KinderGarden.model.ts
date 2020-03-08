import {AddressModel} from './Address.model';

export class KinderGarden {
  public numOfEmployees: number;
  public employeeList: [];

  public constructor(public name: string,
                     public imagePath: string,
                     public events: string[],
                     public adress: AddressModel) {
  }
}
