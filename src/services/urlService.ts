import crypto from 'crypto';
import URL from '../models/urlModel';

const BASE_URL = 'http://localhost:3000';

const generateShortUrl = (): string => {
  return crypto.randomBytes(3).toString('hex'); 
};

export const createShortUrl = async (longUrl: string, customAlias?: string): Promise<string> => {
  const shortUrl = customAlias || generateShortUrl();


  const existingUrl = await URL.findOne({ where: { shortUrl } });
  if (existingUrl) {
    if (customAlias) {
      throw new Error('Alias already in use');
    } else {
      return createShortUrl(longUrl); 
    }
  }


  await URL.create({ longUrl, shortUrl });
  return `${BASE_URL}/${shortUrl}`;
};

export const getLongUrl = async (shortUrl: string): Promise<string | null> => {
  const url = await URL.findOne({ where: { shortUrl } });
  return url ? url.longUrl : null;
};