
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/Rx';
import { BongDa69Cmd } from './bongda69-cmd';
import { Observable } from 'rxjs/Observable';

export class HeaderKey {
    key: string;
    value: string;
}

export class ParamBuilder {
    fields = [];
    private static _instance: ParamBuilder;
    constructor() { }

    public static builder() {
        if (this._instance == null || this._instance == undefined) this._instance = new ParamBuilder();
        this._instance.resetFields();
        return this._instance;
    }
    public static newBuilder() {
        return new ParamBuilder();
    }
    private resetFields() {
        this.fields = [];
    }
    public add(key, value) {
        this.fields.push({
            key: key,
            value: value
        });
        return this;
    }

    public addIgnoreNull(key, value) {
        if (value != null && value != undefined) {
            this.fields.push({
                key: key,
                value: value
            });
        }
        return this;
    }
    public addStringIgnoreEmpty(key, value: string) {
        if (value.length > 0) {
            this.fields.push({
                key: key,
                value: value
            });
        }
        return this;
    }
    public build(): string {
        let params: string = '';
        for (var i = 0; i < this.fields.length; i++) {
            params += this.fields[i].key + '=' + this.fields[i].value;
            if (i != this.fields.length - 1) {
                params += '&';
            }
        }
        return params;
    }
}

export class HttpService {

    mUrl: string = "https://us-central1-aia-bongdaphui.cloudfunctions.net/api/";
    mClientKey: string = "e9118c7f9da383f85003d29e94f32693";
    mDebugEnable: boolean = false;


    constructor(private mHttpClient: HttpClient) {

    }

    public setDebugEnable(enable: boolean) {
        this.mDebugEnable = enable;
    }

    public getHttpClient(): HttpClient {
        return this.mHttpClient;
    }

    public requestPing(): Observable<Object> {
        let headers: HttpHeaders = new HttpHeaders();
        headers.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        // headers.set('Content-Type', 'application/json; charset=utf-8');
        headers.set("client_key", this.mClientKey);

        let params: HttpParams = new HttpParams();
        params.append("username", "chakke");
        params.append("password", "123456");
        return this.mHttpClient.post(this.mUrl + BongDa69Cmd.PING, {
            headers: headers,
            params: params
        });
    }
}
