import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewCurrencyComponent } from './view-currency/view-currency.component';
import { ListCurrencyComponent } from './list-currency/list-currency.component';
import { NotfoundCurrencyComponent } from './notfound-currency/notfound-currency.component';
import { CurrencyService} from './service/currency.service';
import {HttpClientModule} from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ViewCurrencyComponent,
    ListCurrencyComponent,
    NotfoundCurrencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
