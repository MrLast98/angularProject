import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SlideshowModule } from 'ng-simple-slideshow';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
	{ path:'aboutus', component: FirstComponent },
	{ path:'', pathMatch: 'full', redirectTo: 'home'},
	{ path:'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
	HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	MatToolbarModule,
	MatButtonModule,
	MatTabsModule,
	MatIconModule,
	MatMenuModule,
	RouterModule.forRoot(routes),
	SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule { }