import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class GroupsService {
    url = 'https://hydmech-59ab0.firebaseio.com/'
    
    constructor(private http: Http) { }

    getGroups() {
        return this.http.get(this.url).map(
            response => response.json()
        );
    }
}

