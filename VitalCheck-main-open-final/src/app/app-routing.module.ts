import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./public/home/home.component";
import {BenefitsComponent} from "./public/benefits/benefits.component";
import {PriceComponent} from "./public/price/price.component";
import {NgModule} from "@angular/core";

const routes : Routes =[
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'benefits', component: BenefitsComponent},
  {path: 'price', component: PriceComponent},

];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{

}

