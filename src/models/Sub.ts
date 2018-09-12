import {IAddress} from './Address';

export interface ISub {
    type?: 'A'|'B' |'C';
    lastName: string;
    name?: string;
    address: IAddress | {x:string; y:string};

    address2?: {a:number} & {b:string};

}