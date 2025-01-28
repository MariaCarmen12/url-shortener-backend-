"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var urlController_1 = require("../controllers/urlController");
var router = (0, express_1.Router)();
router.post('/shorten', urlController_1.shortenUrl);
router.get('/:shortUrl', urlController_1.redirectUrl);
exports.default = router;
