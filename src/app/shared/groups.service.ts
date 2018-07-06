import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class GroupsService {
    bimetalUrl = 'https://hydmech-59ab0.firebaseio.com/BIMETAL.json'

    constructor(private http: Http) { }

    getBimtealGroups() {
        return this.http.get(this.bimetalUrl);
    }
}

