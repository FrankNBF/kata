import { Component, OnInit } from '@angular/core';
import {CurrencyService} from '../service/currency.service';

@Component({
  selector: 'app-list-currency',
  templateUrl: './list-currency.component.html',
  styleUrls: ['./list-currency.component.css']
})
export class ListCurrencyComponent implements OnInit {
  currencies: any[];
  key = 'name';
  reverse = false;
  filter = '';
  p = 1;
  total = 10;

  constructor(private currencyService: CurrencyService) {

  }

  ngOnInit() {
    this.currencyService.getCurrenciesByJSON().subscribe(data => {
      this.currencies = data;
      this.currencyService.setCurrencies(this.currencies);
    }, error => {
      console.log('getCurrencies', error);
      return null;
    });
  }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}
