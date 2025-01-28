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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLongUrl = exports.createShortUrl = void 0;
const crypto_1 = __importDefault(require("crypto"));
const urlModel_1 = __importDefault(require("../models/urlModel"));
const BASE_URL = 'http://localhost:3000';
const generateShortUrl = () => {
    return crypto_1.default.randomBytes(3).toString('hex');
};
const createShortUrl = (longUrl, customAlias) => __awaiter(void 0, void 0, void 0, function* () {
    const shortUrl = customAlias || generateShortUrl();
    const existingUrl = yield urlModel_1.default.findOne({ where: { shortUrl } });
    if (existingUrl) {
        if (customAlias) {
            throw new Error('Alias already in use');
        }
        else {
            return (0, exports.createShortUrl)(longUrl);
        }
    }
    yield urlModel_1.default.create({ longUrl, shortUrl });
    return `${BASE_URL}/${shortUrl}`;
});
exports.createShortUrl = createShortUrl;
const getLongUrl = (shortUrl) => __awaiter(void 0, void 0, void 0, function* () {
    const url = yield urlModel_1.default.findOne({ where: { shortUrl } });
    return url ? url.longUrl : null;
});
exports.getLongUrl = getLongUrl;
//# sourceMappingURL=urlService.js.map