import { Injectable } from '@angular/core';

@Injectable()
export class AppGlobals {
    public accessToken: string;
    public sessionId: string;
    public deviceToken: string;
    public baseUrl = 'https://mimobotnode.au-syd.mybluemix.net';
    // public baseUrl = 'http://localhost:3000/';

    setIdToken(token) {
        this.accessToken = token; 
    }
    
    setDeviceToken(deviceToken){
        this.deviceToken = deviceToken;
    }

}