
export class Workers {
  public name: string;
  public tlfnumber: number;
  public email: string;
  public imagePath: string;

  constructor(name: string, tlfnumber: number, email: string, imagePath: string) {
    this.name = name;
    this.tlfnumber = tlfnumber;
    this.email = email;
    this.imagePath = imagePath;
  }
}
