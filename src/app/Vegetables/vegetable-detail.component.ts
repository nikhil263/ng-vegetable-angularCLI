import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';
import {IVegetable} from './vegetables';
import {VegetableService} from './vegetable.service'

@Component({
    templateUrl:'./vegetable-detail.component.html'
})
export class VegetableDetailComponent implements OnInit {
pageTitle: string ='Vegetable Detail'
vegetable: IVegetable;
errorMessage: string;
    private sub: Subscription;
    
    constructor(private _route :ActivatedRoute, private _router :Router,
    private _vegetableService: VegetableService) {
    }

 getVegetable(id: number) {
        this._vegetableService.getVegetable(id).subscribe(
            vegetable => this.vegetable = vegetable,
            error => this.errorMessage = <any>error);
    }
    ngOnInit(): void{
       this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getVegetable(id);
        });
    }

    onBack(): void {
        this._router.navigate(['/vegetables']);
    }

}