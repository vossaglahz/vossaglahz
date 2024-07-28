import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string

    @Column()
    description!: string

    @Column()
    price!: number

    @Column({nullable: true})
    image!: string
}