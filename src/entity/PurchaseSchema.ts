import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, BaseEntity} from "typeorm";
import { ProductSchema } from "./ProductSchema";
import { UserSchema } from "./UserSchema";


@Entity()


export class PurchaseSchema extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @ManyToMany(()=> ProductSchema)
    @JoinTable()
    products: ProductSchema[]

    @Column()
    purchaseDate: Date

    @Column()
    total: number

    @ManyToOne(()=>UserSchema, x=> x.purchases)
    user: UserSchema

}