"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLongUrl = exports.createShortUrl = void 0;
var urlModel_1 = require("../models/urlModel");
var crypto_1 = __importDefault(require("crypto"));
var BASE_URL = 'http://localhost:3000';
var generateShortUrl = function () {
    return crypto_1.default.randomBytes(3).toString('hex');
};
var createShortUrl = function (longUrl) {
    var shortUrl = generateShortUrl();
    (0, urlModel_1.saveUrl)(shortUrl, longUrl);
    return "".concat(BASE_URL, "/").concat(shortUrl);
};
exports.createShortUrl = createShortUrl;
var getLongUrl = function (shortUrl) {
    var url = (0, urlModel_1.getUrl)(shortUrl);
    return url ? url.longUrl : undefined;
};
exports.getLongUrl = getLongUrl;
