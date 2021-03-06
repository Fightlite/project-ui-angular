import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  // this component receive data by @Output and EventEmitter from child components

  constructor() { }

  ngOnInit(): void {
  }

  paymentInfo: any = {
    nextdue: "",
    amount: 0,
    paidby: "",
    payifdue: false,
  };

  receiveData($event: any) {
    this.paymentInfo = $event;
  }

}
