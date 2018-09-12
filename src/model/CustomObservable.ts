import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs';
import {  retry, retryWhen, flatMap, delay,map,catchError} from 'rxjs/operators';
import NewError from './NewError';
import { throwError, of } from 'rxjs';


/**
 * Returns an improved version of RxJS Ajax
 * @param url REST API url when request will be made
 */
export const SigmaAjax = (url: string): Observable<any> => {
    const ajaxSetup = {
        headers : {
            "Accept": "*/*",
            "Authorization": "Bearer AbCdEf123456",
            "custom_header" : "aaa"        
        },
        responseType: "text",
        url
    };

    return ajax(ajaxSetup)
    .pipe(  
        map(data => {
            try {
                return JSON.parse(data.response);
            }
            catch (e){
                throw new Error(e.message);  
            }
        }),
        catchError(error => {
            console.log(error.xhr);
            const xhr = error.xhr;
            throw new Error(error);
        }),
    );
}