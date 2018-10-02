import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class GroupsService {
    groupsUrl = 'https://hydmech-59ab0.firebaseio.com/GROUPS.json';
    bimetal_metric_groups_Url = 'https://hydmech-59ab0.firebaseio.com/BIMETAL_METRIC_GROUPS.json';
    carbon_metric_groups_Url = 'https://hydmech-59ab0.firebaseio.com/CARBON_METRIC_GROUPS.json';
    bimetal_imperial_groups_Url = 'https://hydmech-59ab0.firebaseio.com/BIMETAL_IMPERIAL_GROUPS.json';
    carbon_imperial_groups_Url = 'https://hydmech-59ab0.firebaseio.com/CARBON_IMPERIAL_GROUPS.json';
    constructor(private http: Http) { }

    getGroups() {
        return this.http.get(this.groupsUrl);
    }

    getCarbonMetricGroups() {
        return this.http.get(this.carbon_metric_groups_Url);
    }

    getBimetalMetricGroups() {
        return this.http.get(this.bimetal_metric_groups_Url);
    }

    getBimetalImperialGroups() {
        return this.http.get(this.bimetal_imperial_groups_Url);
    }

    getCarbonImperialGroups() {
        return this.http.get(this.carbon_imperial_groups_Url);
    }
}

