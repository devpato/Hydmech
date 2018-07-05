import { Injectable } from '@angular/core';

@Injectable()
export class BladeTypeService {
    bladeType: string;

    setBladeType(bladeType) {
        this.bladeType = bladeType;
    }
    
    getBladeType() {
       return this.bladeType;
    }
}