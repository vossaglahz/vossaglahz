import cors from 'cors';
import App from './app';
import logger from './middlewares/logger';
import { ArticleRoute } from './routes/article.route';
import { ProductRoute } from './routes/product.route';

const app = new App({
  port: 8000,
  middlewares: [logger(), cors()],
  controllers: [new ArticleRoute(), new ProductRoute()],
});

app.listen();
