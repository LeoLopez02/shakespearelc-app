import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent implements OnInit {
  isCardFamily: boolean = false;
  isCardReferral: boolean = false;
  cardFront: boolean = true;
  cardBack: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onClickFamily() {
    this.cardBack = !this.cardBack;
  }

  onClickReferral() {
    this.cardFront = !this.cardFront;
  }
}
