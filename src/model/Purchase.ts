import { Product } from "./Product";

export interface Purchase {
    id: number; 
    products: Product[]; 
    purchaseDate: Date; 
    total: number;
}