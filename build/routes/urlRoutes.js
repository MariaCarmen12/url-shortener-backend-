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
const express_1 = require("express");
const urlService_1 = require("../services/urlService");
const router = (0, express_1.Router)();
router.post('/shorten', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { longUrl, customAlias } = req.body;
        if (!longUrl) {
            res.status(400).json({ message: 'Invalid URL' });
            return;
        }
        const shortUrl = yield (0, urlService_1.createShortUrl)(longUrl, customAlias);
        res.status(201).json({ shortUrl });
    }
    catch (error) {
        if (error instanceof Error && error.message === 'Alias already in use') {
            res.status(400).json({ message: error.message });
            return;
        }
        console.error('Error en la ruta POST /shorten:', error);
        next(error);
    }
}));
exports.default = router;
//# sourceMappingURL=urlRoutes.js.map