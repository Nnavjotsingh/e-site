import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApparelComponent } from './apparel/apparel.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { BathComponent } from './bath/bath.component';
import { FoodComponent } from './food/food.component';
import { OfferComponent } from './offer/offer.component';
import { LogninComponent } from './lognin/lognin.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';
import { PageNotComponent } from './page-not/page-not.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'apparel', component: ApparelComponent },
  { path: 'kitchen' , component: KitchenComponent},
  { path: 'bath' , component: BathComponent},
  { path: 'food' , component: FoodComponent},
  { path: 'offer' , component: OfferComponent},
  { path: 'lognin' , component: LogninComponent},
  { path: 'about' , component: AboutComponent},
  { path: 'shop' , component: ShopComponent},
  { path: 'cart' , component: CartComponent},
  { path: '**' , component: PageNotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent , ApparelComponent , KitchenComponent , BathComponent, FoodComponent,
                                  OfferComponent, LogninComponent, AboutComponent, ShopComponent , PageNotComponent , CartComponent]