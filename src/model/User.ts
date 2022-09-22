import { Purchase } from "./Purchase";

export interface User {
    id: number; 
    username: string; 
    password: string;
    money: number; 
    purchases: Array<Purchase>;
}

