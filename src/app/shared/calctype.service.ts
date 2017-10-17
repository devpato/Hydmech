import { Injectable } from '@angular/core';

@Injectable()
export class CalcTypeService {
    calcType: string;

    setCalcType(calcType) {
        this.calcType = calcType;
    }
    
    getCalcType(){
       return this.calcType;
    }
}