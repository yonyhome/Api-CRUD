const typeorm = require("typeorm");
import {DataSource} from"typeorm"
import { ProductSchema } from "./entity/ProductSchema";
import { UserSchema } from "./entity/UserSchema";
import { PurchaseSchema } from "./entity/PurchaseSchema";

export const connection = new DataSource({
    type: "postgres",
    host: "postgres_ss",
    port: 5432,
    username: 'postgres',
    password: 'admin1234',
    database: "shopping",
    synchronize: true,
    logging: false,
    entities: [
        ProductSchema,
        UserSchema,
        PurchaseSchema
    ]
})
