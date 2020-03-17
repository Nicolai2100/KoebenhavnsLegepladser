import {AddressModel} from './Address.model';
// todo skal slettes
export class KinderGardenDum {

  public constructor(
    public id: number,
    public name: string,
    public addressStreet: string,
    public addressNumber: number,
    public  commune: string,
    public zipCode: number,
    public toilet: boolean,
    public imagePath: string,
  ) {
  }
}
