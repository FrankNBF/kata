import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundCurrencyComponent } from './notfound-currency.component';

describe('NotfoundCurrencyComponent', () => {
  let component: NotfoundCurrencyComponent;
  let fixture: ComponentFixture<NotfoundCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotfoundCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfoundCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
