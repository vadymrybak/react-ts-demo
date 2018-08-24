import { Strength } from "./Strenth";
export default class Person {
    private name: string;
    private age: number;
    private strenth: Strength;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
        this.strenth = Strength.WEAK;
    }

    public getStrenth(): Strength {
        return this.strenth;
    }

    public setName(name: string): void{
        this.name = name;
    }

    public getName(): string{
        return this.name;
    }

    public getAge(): number{
        return this.age;
    }
}