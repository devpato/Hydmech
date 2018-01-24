import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    username: string;

    setUsername(username) {
        this.username = username;
    }
    
    getUsername(){
       return this.username;
    }
}