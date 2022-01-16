import { Component, OnInit } from '@angular/core';
import { GeneralInformation } from 'src/app/models/GeneralInformation';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  public propertyTax: any = [
    "Property Tax",
    "1",
    "2",
    "3"
  ];

  public copyFrom: any = [
    "",
    "1",
    "2",
    "3"
  ];

  public generalInformation: GeneralInformation = {
    type: 0,
    value: 0,
    account: '',
    parcelId: '',
    copyFrom: 0,
    map: '',
    ward: '',
    lot: '',
    block: ''
  };
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.generalInformation = this.commonService.getGeneralInformation();
  }

}
