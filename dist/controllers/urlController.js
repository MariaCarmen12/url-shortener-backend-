"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirectUrl = exports.shortenUrl = void 0;
var urlService_1 = require("../services/urlService");
var shortenUrl = function (req, res) {
    var longUrl = req.body.longUrl;
    var shortUrl = (0, urlService_1.createShortUrl)(longUrl);
    res.status(201).json({ shortUrl: shortUrl });
};
exports.shortenUrl = shortenUrl;
var redirectUrl = function (req, res) {
    var shortUrl = req.params.shortUrl;
    var longUrl = (0, urlService_1.getLongUrl)(shortUrl);
    if (longUrl) {
        res.redirect(longUrl);
    }
    else {
        res.status(404).json({ message: 'URL not found' });
    }
};
exports.redirectUrl = redirectUrl;
