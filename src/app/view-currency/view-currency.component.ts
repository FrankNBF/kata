import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CurrencyService} from '../service/currency.service';

@Component({
  selector: 'app-view-currency',
  templateUrl: './view-currency.component.html',
  styleUrls: ['./view-currency.component.css']
})
export class ViewCurrencyComponent implements OnInit {

  currency: {
    code: string,
    name: string,
    symbol: string,
    name_plural: string,
    decimal_digits: number,
    rounding: string,
    symbol_native: string
  };
  history: any;
  id: string;

  constructor(private currencyService: CurrencyService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];
    if (this.id == null){
        this.router.navigate(['404']);
    } else {
      // @ts-ignore
      this.currency = this.currencyService.getCurrency(this.id);
      if (this.currency == null) {
        alert('Currency information not found, please try again.');
        this.router.navigate(['list']);
      } else {
        // @ts-ignore
        this.currencyService.getCurrencyHistory(this.currency.code).subscribe((data: any) => {
            console.log('getCurrencyHistorie', data);
            this.history = data.quotes;
        }, error => {
          console.log('getCurrencyHistorie', error);
          return null;
        });
      }
    }
  }

}
