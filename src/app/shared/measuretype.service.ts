import { Injectable } from '@angular/core';

@Injectable()
export class MeasureTypeService {
    measureType: string;

    setMeasureType(measureType) {
        this.measureType = measureType;
    }
    
    getMeasureType(){
       return this.measureType;
    }
}