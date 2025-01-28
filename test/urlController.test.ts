import request from 'supertest';
import app from '../src/index';

describe('URL Shortener API', () => {
  it('should shorten a URL', async () => {
    const res = await request(app)
      .post('/api/shorten')
      .send({ longUrl: 'https://example.com' });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('shortUrl');
  });

  it('should redirect to the original URL', async () => {
    const res = await request(app)
      .post('/api/shorten')
      .send({ longUrl: 'https://example.com' });

    const shortUrl = res.body.shortUrl.split('/').pop();

    const redirectRes = await request(app).get(`/${shortUrl}`);
    expect(redirectRes.status).toBe(302);
    expect(redirectRes.header.location).toBe('https://example.com');
  });
});