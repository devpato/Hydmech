import { Injectable } from '@angular/core';

@Injectable()
export class BandsawService {
    orientation: string;

    setOrinentation(orientation) {
        this.orientation = orientation;
    }
    
    getOrinentation() {
       return this.orientation;
    }
}