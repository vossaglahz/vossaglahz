import { fetchProducts } from '@/features/productsSlice';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductItem } from './ProductItem';

export function Products() {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      <Grid item container direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Grid item>
          <Typography variant="h4">Products</Typography>
        </Grid>
      </Grid>

      <Grid item container direction={'row'} spacing={1}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Grid>

      <Grid item>
        <Button color="primary" component={Link} to={'/products/new'}>
          Add product
        </Button>
      </Grid>
    </Grid>
  );
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string
}
