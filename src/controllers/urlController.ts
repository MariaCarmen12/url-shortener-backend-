import { Request, Response } from 'express';
import { createShortUrl, getLongUrl } from '../services/urlService';

export const shortenUrl = async (req: Request, res: Response): Promise<void> => {
  try {
    const { longUrl } = req.body;
    const shortUrl = await createShortUrl(longUrl);
    res.status(201).json({ shortUrl });
  } catch (error) {
    console.error('Error creating short URL:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const redirectUrl = async (req: Request, res: Response): Promise<void> => {
  try {
    const { shortUrl } = req.params;
    const longUrl = await getLongUrl(shortUrl);
    if (longUrl) {
      res.redirect(longUrl);
    } else {
      res.status(404).json({ message: 'URL not found' });
    }
  } catch (error) {
    console.error('Error redirecting to long URL:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};