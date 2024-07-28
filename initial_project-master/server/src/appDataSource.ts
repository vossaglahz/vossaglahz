import { DataSource } from "typeorm";
import { Product } from "./entities/product.entity";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "M2Z0h0E2!",
    database: "classwork",
    synchronize: true,
    entities: [Product],
    driver: require('mysql2')
});
