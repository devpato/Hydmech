import { Injectable } from '@angular/core';

@Injectable()
export class BladeTypeService {
    bladeType: string;
    bladeTypeSelected : any
    
    setBladeType(bladeType) {
        this.bladeType = bladeType;
    }
    
    getBladeType() {
       return this.bladeType;
    }

    setBladeTypeSelected(bladeTypeSelected : any) {
        this.bladeTypeSelected = bladeTypeSelected;
    }

    getBladeTypeSelected() {
        return this.bladeTypeSelected;
    }
}