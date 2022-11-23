import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TeamComponent } from './components/team/team.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AdsComponent } from './components/ads/ads.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    PricingComponent,
    AdsComponent,
    AboutusComponent,
    QuestionsComponent,
    CollapsibleWellComponent,
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: AdsComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'team', component: TeamComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'about-us', component: AboutusComponent },
    ]),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.slcConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
