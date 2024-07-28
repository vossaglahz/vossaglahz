import { Expose } from 'class-transformer';

export class ProductDto {
  @Expose() title!: string;

  @Expose() description!: string;

  @Expose() price!: number;

  @Expose() image!: string;
}
