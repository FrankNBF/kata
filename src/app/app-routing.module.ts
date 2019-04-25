import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewCurrencyComponent} from './view-currency/view-currency.component';
import {ListCurrencyComponent} from './list-currency/list-currency.component';
import {NotfoundCurrencyComponent} from './notfound-currency/notfound-currency.component';

const routes: Routes = [
  { path: 'currency/:id', component: ViewCurrencyComponent},
  { path: 'list', component: ListCurrencyComponent},
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: '404', component: NotfoundCurrencyComponent},
  { path: '**', component: NotfoundCurrencyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
