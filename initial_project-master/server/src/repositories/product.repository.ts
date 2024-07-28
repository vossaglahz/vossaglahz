import { AppDataSource } from "@/appDataSource";
import { ProductDto } from "@/dto/product.dto";
import { Product } from "@/entities/product.entity";
import { Repository } from "typeorm";

class ProductRepo {
    private repo: Repository<Product>

    constructor() {
        this.repo = AppDataSource.getRepository(Product)
    }

    async create(body: ProductDto) {
        return await this.repo.save(body)
    }

    async getAll() {
        return await this.repo.find()
    }

    async getOne(id: number) {
        return await this.repo.findOne({where: {id: id}})
    }
}

export const productRepo = new ProductRepo()