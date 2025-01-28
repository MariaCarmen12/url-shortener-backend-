"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUrl = exports.saveUrl = void 0;
var urlDatabase = {};
var saveUrl = function (shortUrl, longUrl) {
    urlDatabase[shortUrl] = { shortUrl: shortUrl, longUrl: longUrl };
};
exports.saveUrl = saveUrl;
var getUrl = function (shortUrl) {
    return urlDatabase[shortUrl];
};
exports.getUrl = getUrl;
//   const redis = new Redis();
// export const saveUrl = async (shortUrl: string, longUrl: string): Promise<void> => {
//   await redis.set(shortUrl, longUrl);
// };
// export const getUrl = async (shortUrl: string): Promise<string | null> => {
//   return await redis.get(shortUrl);
// };
