import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CoreModule } from 'app/core/core.module';
import { CoreUiModule } from 'app/core-ui/core-ui.module';
import { MarketModule } from '../../../core/market/market.module';

import { ModalsService } from '../../../modals/modals.service';

import { SellerListingComponent } from './seller-listing.component';

describe('SellerListingComponent', () => {
  let component: SellerListingComponent;
  let fixture: ComponentFixture<SellerListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerListingComponent ],
      imports: [
        CoreUiModule.forRoot(),
        CoreModule.forRoot(),
        BrowserAnimationsModule,
        RouterTestingModule,
        MarketModule.forRoot()
      ],
      providers: [ ModalsService ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
