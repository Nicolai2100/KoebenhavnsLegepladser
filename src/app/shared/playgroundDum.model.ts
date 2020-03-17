import {AddressModel} from './address.model';
// todo skal slettes
export class PlaygroundDum {

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
