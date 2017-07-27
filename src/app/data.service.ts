import { Injectable } from '@angular/core';

@Injectable()

export class DataService {

  constructor() { }
  cars =['Nissan', 'Ford', 'Toyota'];

  meData(){
    return 'This is my data';
  }
}
