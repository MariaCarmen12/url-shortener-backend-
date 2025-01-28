export declare const createShortUrl: (longUrl: string, customAlias?: string) => Promise<string>;
export declare const getLongUrl: (shortUrl: string) => Promise<string | null>;
