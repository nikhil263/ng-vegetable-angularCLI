import {  PipeTransform, Pipe } from '@angular/core';
import { IVegetable } from './vegetables';

@Pipe({
    name: 'vegetableFilter'
})
export class VegetableFilterPipe implements PipeTransform {

    transform(value: IVegetable[], filterBy: string): IVegetable[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((vegetable: IVegetable) =>
            vegetable.vegetableName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
