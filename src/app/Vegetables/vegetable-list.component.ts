import {Component,OnInit} from '@angular/core'
import {IVegetable} from './vegetables'
import {VegetableService} from './vegetable.service'

@Component({
    templateUrl:'./vegetable-list.component.html',
    styleUrls: ['./vegetable-list.component.css']
})
export class VegetablelistComponent implements OnInit{

    pageTitle:string ='Vegetables';
    listFilter:string;
    imageWidth: number =50;
    imageMargin: number =2;
    showImage: boolean = false;
    vegetables: IVegetable[] ; 
    errorMessage: string;
    
    constructor(private _vegetableService: VegetableService) {
        
    }

    toggleImage():void{
        this.showImage =!this.showImage;
    }
   ngOnInit(): void {
        this._vegetableService.getVegetables()
                .subscribe(v => this.vegetables = v,
                           error => this.errorMessage = <any>error);
    }

    onRatingClicked(message:string): void{
        this.pageTitle ='Vegetable star clicks!: '+ message;
    }
}