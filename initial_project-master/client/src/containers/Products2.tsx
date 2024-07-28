import { Link } from 'react-router-dom';
import { Typography, Grid, Button } from '@mui/material';

export function Products() {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container direction="row" justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4">Products</Typography>
        </Grid>
        <Grid item>
          <Button color="primary" component={Link} to={'/products/new'}>
            Add product
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
