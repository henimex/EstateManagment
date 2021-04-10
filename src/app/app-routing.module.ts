import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { PropertyAddComponent } from './Components/property/property-add/property-add.component';
import { PropertyDetailComponent } from './Components/property/property-detail/property-detail.component';
import { PropertyListComponent } from './Components/property/property-list/property-list.component';
import { PropertyRentComponent } from './Components/property/property-rent/property-rent.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PropertyListComponent },
  { path: 'list-property/:propertyType', component: PropertyListComponent },
  { path: 'add-property', component: PropertyAddComponent },
  { path: 'buy-property', component: PropertyAddComponent },
  { path: 'sell-property', component: PropertyAddComponent },
  { path: 'rent-property', component: PropertyRentComponent },
  { path: 'detail-property/:propertyId', component: PropertyDetailComponent },
  // { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
