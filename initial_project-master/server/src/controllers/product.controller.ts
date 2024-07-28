import { ProductService } from '@/services/product.service';
import { RequestHandler } from 'express';
import { plainToInstance } from 'class-transformer';
import { ProductDto } from '@/dto/product.dto';

export class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  getAllProducts: RequestHandler = async (req, res): Promise<void> => {
    const products = await this.service.getAllProducts();
    res.send(products);
  };

  getProduct: RequestHandler = (req, res): void => {
    const product = this.service.getProduct(req.params.id);
    res.send(product);
  };

  createProduct: RequestHandler = (req, res): void => {
    const productDto = plainToInstance(ProductDto, req.body);
    if (req.file) productDto.image = req.file.filename;
    const product = this.service.createProduct(productDto);
    res.send(product);
  };
}
