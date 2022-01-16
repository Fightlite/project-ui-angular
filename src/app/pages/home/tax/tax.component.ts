import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {
  
  // input tax amount information from parent: HomeComponent
  @Input() taxInfo: any;

  public schedules = [
    "Monthly",
    "Quaterly",
    "Annually",
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
