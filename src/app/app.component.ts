import { Component } from '@angular/core';
import {VegetableService} from './vegetables/vegetable.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    providers:[VegetableService]
})
export class AppComponent {
   pageTitle: string = "Vegetable Market";
}
