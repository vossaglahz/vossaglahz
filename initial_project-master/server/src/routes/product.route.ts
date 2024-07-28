import { ProductController } from '@/controllers/product.controller';
import upload from '@/middlewares/storage';
import { Router } from 'express';

export class ProductRoute {
  public path = '/products';
  public router = Router();
  private controller: ProductController;

  constructor() {
    this.controller = new ProductController();
    this.init();
  }

  private init() {
    this.router.get('/', this.controller.getAllProducts);
    this.router.get('/:id', this.controller.getProduct);
    this.router.post('/create', upload.single('image') ,this.controller.createProduct);
  }
}
