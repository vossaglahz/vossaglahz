import { Container, CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { AppToolbar } from './components/UI/AppToolbar';
import { Products } from './containers/Products';
import { NewProductForm } from './containers/NewProductForm';

function App() {
  return (
    <>
    <a href=""></a>
      <CssBaseline />
      <header>
        <AppToolbar />
      </header>
      <main>
        <Container maxWidth="xl" sx={{ mt: 10 }}>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products/new" element={<NewProductForm />} />
          </Routes>
        </Container>
      </main>
    </>
  );
}

export default App;
