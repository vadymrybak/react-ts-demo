import { from, Observable, forkJoin } from 'rxjs';
import {  retry, retryWhen, flatMap, delay,map,catchError } from 'rxjs/operators';
import { interval, of, throwError  } from 'rxjs';

import FetchObservable from './FetchObservable';

export default class ApiService{
    public static url1: string = "/api/hello";
    public static url2: string = "/api/bye";
    public static url3: string = "/api/hi";

    public static headers = {
        headers : { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            
           }
    };

    public static getData(): Observable<any> {   
        return forkJoin([
            FetchObservable.getObservable((this.url1)),
            FetchObservable.getObservable((this.url2)),
            FetchObservable.getObservable((this.url3)),
        ]);
    }

    public static getSingleData(query: string): Observable<any> {
        return FetchObservable.getObservable((this.url1) + "?query=" + query);
    }
}