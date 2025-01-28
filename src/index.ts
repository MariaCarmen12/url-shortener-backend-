import express from 'express';
import cors from 'cors';
import urlRoutes from './routes/urlRoutes';
import { getLongUrl } from './services/urlService';
import sequelize from './database';
import URL from './models/urlModel';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));


app.use(express.json());


app.use('/api', urlRoutes);


app.get('/:shortUrl', async (req, res, next) => {
  try {
    const { shortUrl } = req.params;
    const longUrl = await getLongUrl(shortUrl);

    if (longUrl) {
      res.redirect(longUrl);
    } else {
      res.status(404).json({ message: 'URL not found' });
    }
  } catch (error) {
    console.error('Error en la ruta GET /:shortUrl:', error); // Log del error
    next(error); 
  }
});


app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error inesperado:', err);

  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({ message: 'Internal Server Error' });
});


sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  }).on('error', (err: NodeJS.ErrnoException) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${PORT} is already in use. Please choose a different port.`);
    } else {
      console.error('Unexpected error:', err);
    }
  });
});

export default app;