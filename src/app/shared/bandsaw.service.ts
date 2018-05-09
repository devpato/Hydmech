import { Injectable } from '@angular/core';

@Injectable()
export class BandsawService {
    orientation: string;

    setOrinentation(orientation) {
        this.orientation = orientation;
    }
    
    getOrinentation(orientation) {
        this.orientation = orientation;
    }
}