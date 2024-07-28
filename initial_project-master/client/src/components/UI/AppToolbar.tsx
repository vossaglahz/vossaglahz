import { AppBar, Toolbar, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)(() => ({
  color: 'inherit',
  textDecoration: 'none',
  ['&:hover']: { color: 'inherit' },
}));

export function AppToolbar() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component={StyledLink} to={'/'}>
            Computer parts shop
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
