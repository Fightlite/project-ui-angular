import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additional-information',
  templateUrl: './additional-information.component.html',
  styleUrls: ['./additional-information.component.css']
})
export class AdditionalInformationComponent implements OnInit {

  public notes: string = 'Additional Information';

  constructor() { }

  ngOnInit(): void {
  }

}
