import {Workers} from './Workes.model';
import { Injectable } from "@angular/core";
// tslint:disable-next-line:class-name
@Injectable()
export class workerService {
private employees: Workers[] = [
  new Workers('Gustav', 22422456, 's185031@student.dtu.dk',
    'assets/images/gustav.png'),
  new Workers('Gustav igen', 65422422, 'gustav.nobert1998@gmail.com',
     'assets/images/gustav.png')
];
  getworkers() {
    return this.employees.slice();
  }
}
