import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { IProduct } from './Products';
import { ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';

interface Props {
  product: IProduct;
}

const apiUrl = 'http://localhost:8000'

export function ProductItem({ product }: Props) {
  const { title, price, id, description, image } = product;
  let cardImage = `${apiUrl}/uploads/unnamed.png`

  if(image && image !== '') {
    cardImage = `${apiUrl}/uploads/${image}`
  }

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card sx={{ minWidth: 275 }}>
        <CardHeader title={title} />
        <CardMedia
         image={cardImage}
         title={title}
         sx={{height: 200}}
       >
       </CardMedia>
        <CardContent>
          <Typography variant="body2">{description}</Typography>
          <strong style={{ marginLeft: '10px' }}>Price: {price} KZT</strong>
        </CardContent>
        <CardActions>
          <IconButton component={Link} to={`/products/${id}`}>
            <ArrowForward />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
