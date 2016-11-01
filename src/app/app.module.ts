import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {WelcomeComponent} from './home/welcome.component';
import {VegetablelistComponent} from './vegetables/vegetable-list.Component';
import {VegetableDetailComponent} from './vegetables/vegetable-detail.Component';

import {VegetableFilterPipe} from './vegetables/Vegetable-Filter.Pipe';
import {StarComponent} from './shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
     VegetablelistComponent,
   VegetableDetailComponent,
   VegetableFilterPipe,
   StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     RouterModule.forRoot([     
       { path: 'vegetables', component: VegetablelistComponent },
       { path: 'vegetable/:id', component: VegetableDetailComponent },
       { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
