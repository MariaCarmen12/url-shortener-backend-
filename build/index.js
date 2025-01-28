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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const urlRoutes_1 = __importDefault(require("./routes/urlRoutes"));
const urlService_1 = require("./services/urlService");
const database_1 = __importDefault(require("./database"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)({
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));
app.use(express_1.default.json());
app.use('/api', urlRoutes_1.default);
app.get('/:shortUrl', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
        console.error('Error en la ruta GET /:shortUrl:', error); // Log del error
        next(error);
    }
}));
app.use((err, req, res, next) => {
    console.error('Error inesperado:', err);
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ message: 'Internal Server Error' });
});
database_1.default.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    }).on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.error(`Port ${PORT} is already in use. Please choose a different port.`);
        }
        else {
            console.error('Unexpected error:', err);
        }
    });
});
exports.default = app;
//# sourceMappingURL=index.js.map