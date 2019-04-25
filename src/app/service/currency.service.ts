import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';

@Injectable()
export class CurrencyService implements OnInit {
  currencies: any[];
  currency: object;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  getCurrencies() {
    if(this.currencies == null) {
      this.getCurrenciesByJSON().subscribe(data => {
        this.currencies = data;
        return this.currencies;
      }, error => {
        console.log('getCurrencies', error);
        return null;
      });
    } else {
      return this.currencies;
    }
  }

  setCurrencies(items: any[]) {
    this.currencies = items;
  }

  getCurrenciesByJSON(): Observable<any> {
    return this.http.get('./assets/data.json');
  }

  getCurrency(id: string) {
    for (const item of this.getCurrencies()) {
      if (item.code === id) {
        this.currency = item;
        return this.currency;
      }
    }
    return null;
  }

  setCurrency(item: object) {
    this.currency = item;
  }

  getCurrencyHistory(code: string) {
    return this.http.get('http://apilayer.net/api/live?access_key=096722563a50dd786b6a8618e4a3fa61&&currencies=' + code);
  }
}
