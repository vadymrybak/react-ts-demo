import { from, Observable, forkJoin } from 'rxjs';
import {  retry, retryWhen, flatMap, delay,map,catchError } from 'rxjs/operators';
import { interval, of, throwError  } from 'rxjs';

import NewError from './NewError';

export default class FetchObservable {

    public static getObservable(url: string): Observable<any>{
        const promise = fetch(url)
        .then(response => { 
            if(response.ok) {
                return response.json();
            }
            else{
                return response.text().then( text => {
                    const error = new NewError(text);
                    error.errorCode = response.status;
                    error.errorMessage = response.statusText;
                    error.wasRedirected = response.redirected;
                    throw error;
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            const error2 = new NewError(error);
            error2.errorCode = 520;
            error2.errorMessage = "Bad JSON";
            error2.wasRedirected = false;
            throw error2;
        });
        return from(promise);
    }
}