import {AddressModel} from './Address.model';

export class KinderGardenModel {
  public adress: AddressModel;
  public numOfEmployees: number;
  public employeeList: [];
  public events: [];

  public constructor(public name: string) {
  }
}
