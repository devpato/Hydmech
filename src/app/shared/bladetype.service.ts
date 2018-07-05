import { Injectable } from '@angular/core';

@Injectable()
export class BladetypeService {
    bladeType: string;

    setBladeType(bladeType) {
        this.bladeType = bladeType;
    }
    
    getBladeType() {
       return this.bladeType;
    }
}