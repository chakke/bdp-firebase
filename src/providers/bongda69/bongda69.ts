
import { Injectable } from "@angular/core";
import { HttpService } from "../base/classes/http-service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BongDa69Module {
    
    public mHttpService: HttpService;

    constructor(public mHttpClient: HttpClient) {
        this.mHttpService = new HttpService(mHttpClient);
    }

    getHttpService() {
        return this.mHttpService;
    }

}