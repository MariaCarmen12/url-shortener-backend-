import { Router, Request, Response, NextFunction } from 'express';
import { createShortUrl } from '../services/urlService';

const router = Router();

router.post('/shorten', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { longUrl, customAlias } = req.body;
    if (!longUrl) {
      res.status(400).json({ message: 'Invalid URL' });
      return;
    }
    const shortUrl = await createShortUrl(longUrl, customAlias);
    res.status(201).json({ shortUrl });
  } catch (error) {
    if (error instanceof Error && error.message === 'Alias already in use') {
      res.status(400).json({ message: error.message });
      return;
    }
    console.error('Error en la ruta POST /shorten:', error);
    next(error);
  }
});

export default router;