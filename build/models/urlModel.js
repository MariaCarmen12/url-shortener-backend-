"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database"));
// Extiende la clase Model de Sequelize
class URL extends sequelize_1.Model {
}
// Inicializa el modelo
URL.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    longUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    shortUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize: database_1.default,
    tableName: 'urls',
    timestamps: true
});
exports.default = URL;
//# sourceMappingURL=urlModel.js.map