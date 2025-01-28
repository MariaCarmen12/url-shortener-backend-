"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirectUrl = exports.shortenUrl = void 0;
const urlService_1 = require("../services/urlService");
const shortenUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { longUrl } = req.body;
        const shortUrl = yield (0, urlService_1.createShortUrl)(longUrl);
        res.status(201).json({ shortUrl });
    }
    catch (error) {
        console.error('Error creating short URL:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
exports.shortenUrl = shortenUrl;
const redirectUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { shortUrl } = req.params;
        const longUrl = yield (0, urlService_1.getLongUrl)(shortUrl);
        if (longUrl) {
            res.redirect(longUrl);
        }
        else {
            res.status(404).json({ message: 'URL not found' });
        }
    }
    catch (error) {
        console.error('Error redirecting to long URL:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
exports.redirectUrl = redirectUrl;
//# sourceMappingURL=urlController.js.map