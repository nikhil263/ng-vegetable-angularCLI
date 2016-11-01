import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IVegetable } from './vegetables';

@Injectable()
export class VegetableService {
    private _productUrl = 'api/vegetable/vegetables.json';

    constructor(private _http: Http) { }

    getVegetables(): Observable<IVegetable[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IVegetable[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getVegetable(id: number): Observable<IVegetable> {
        return this.getVegetables()
            .map((products: IVegetable[]) => products.find(p => p.vegetableId === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
