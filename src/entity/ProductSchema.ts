import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm";


@Entity()


export class ProductSchema extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    categoryName: string

    @Column()
    price: number
    
    @Column()
    quantity: number

}