import { from, Observable, forkJoin } from 'rxjs';


export default class ApiService {
    public static url1: string = "/api/hello";
    public static url2: string = "/api/bye";
    public static url3: string = "/api/hi";

    public static getData(): Observable<any> {   
        const promise1 = fetch(this.url1).then(response => response.json());
        const promise2 = fetch(this.url2).then(response => response.json());
        const promise3 = fetch(this.url3).then(response => response.json());
        return forkJoin([
            from(promise1),
            from(promise2),
            from(promise3)
        ]);
    }
}