import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GeneralInformation } from '../models/GeneralInformation';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public generalInformation: GeneralInformation = {
    type: 1,
    value: 30000,
    account: 'ACB123',
    parcelId: 'DA001',
    copyFrom: 2,
    map: 'ASDF',
    ward: 'ASDF',
    lot: 'DGFH',
    block: 'DFGH'
  };

  // create a behavior subject to track the change of total students
  public generalInformation$ = new BehaviorSubject<GeneralInformation>({
    type: 0,
    value: 0,
    account: '',
    parcelId: '',
    copyFrom: 0,
    map: '',
    ward: '',
    lot: '',
    block: ''
  });

  constructor() { }

  public getGeneralInformation() {
    return this.generalInformation;
  }

  public setGeneralInformation(information: GeneralInformation) {
    this.generalInformation = information;
    // inform to all of components know about the change of general information
    this.generalInformation$.next(information);
  }
}
