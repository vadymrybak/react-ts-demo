import { from, Observable, forkJoin } from 'rxjs';
import {  retry, retryWhen, flatMap, delay,map,catchError } from 'rxjs/operators';
import { interval, of, throwError  } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import FetchObservable from './FetchObservable';
import NewError from './NewError';


import { SigmaAjax } from './CustomObservable';
import {ISub} from '../models/Sub';
import * as Ajv from 'ajv';
import { JSub} from '../models/jsub';

export default class ApiService{
    public static url1: string = "/api/hello";
    public static url2: string = "/api/bye";
    public static url3: string = "/api/hi";


    public static getTestRx(): Observable<any> {
        return SigmaAjax(this.url3).pipe(
            map ( (data: ISub)  => {
                const ajx = new Ajv({allErrors:true, missingRefs: 'fail', verbose: true, extendRefs: 'fail'});
                const validate = ajx.compile(JSub);
                const valid = validate(data); 
                console.log("valid", valid, ajx.errorsText(validate.errors));
                return data;
            })
        );
    }
















    public static getData(): Observable<any> {   
        return forkJoin([
            SigmaAjax(this.url1),
            SigmaAjax(this.url2),
            SigmaAjax(this.url3),
        ]);
    }

    public static getSingleData(query: string): Observable<any> {
        return SigmaAjax((this.url1) + "?query=" + query);
    }
}