import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class GroupsService {
    bimetalUrl = 'https://hydmech-59ab0.firebaseio.com/BIMETAL.json';
    bimetalSubGroupsUrl = 'https://hydmech-59ab0.firebaseio.com/BIMETAL_GROUPS.json';
    carbonUrl = 'https://hydmech-59ab0.firebaseio.com/CARBON.json';
    constructor(private http: Http) { }

    getBimetalGroups() {
        return this.http.get(this.bimetalUrl);
    }

    getCarbonGroups() {
        return this.http.get(this.carbonUrl);
    }

    getBimetalSubGroups() {
        return this.http.get(this.bimetalSubGroupsUrl);
    }
}

