import {IPlayground} from './IPlayground';

export class Playground implements IPlayground{
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

  id: number;
  toiletPosibilities: boolean;
}
