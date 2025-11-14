import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnerPageComponent } from './pages/partner-page/partner-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'partner', component: PartnerPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
