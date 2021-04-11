import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './Components/property/property-card/property-card.component';
import { PropertyListComponent } from './Components/property/property-list/property-list.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { PropertyAddComponent } from './Components/property/property-add/property-add.component';
import { PropertyDetailComponent } from './Components/property/property-detail/property-detail.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { FilterRentBuyPipe } from './pipes/filter-rent-buy.pipe';
import { PropertyRentComponent } from './Components/property/property-rent/property-rent.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';


@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    PropertyAddComponent,
    PropertyDetailComponent,
    PageNotFoundComponent,
    FilterRentBuyPipe,
    PropertyRentComponent,
    UserLoginComponent,
    UserRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HousingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
