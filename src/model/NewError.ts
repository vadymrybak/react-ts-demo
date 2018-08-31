export default class NewError extends Error {
    public errorCode: number;
    public errorMessage: string;
    public wasRedirected: boolean;

    constructor(message: string){
        super(message);
    }
}