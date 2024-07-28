import { ProductDto } from '@/dto/product.dto';
import { productRepo } from '@/repositories/product.repository';
import { Product } from '@/entities/product.entity';

export class ProductService {
  getAllProducts = async (): Promise<Product[]> => {
    return await productRepo.getAll()
  };

  getProduct = async (id: string): Promise<Product | null> => {
    return await productRepo.getOne(parseInt(id))
  };

  createProduct = async (data: ProductDto): Promise<Product> => {
    return productRepo.create(data)
  };
}
