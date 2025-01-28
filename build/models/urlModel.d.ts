import { Model, Optional } from 'sequelize';
interface URLAttributes {
    id: number;
    longUrl: string;
    shortUrl: string;
}
interface URLCreationAttributes extends Optional<URLAttributes, 'id'> {
}
declare class URL extends Model<URLAttributes, URLCreationAttributes> implements URLAttributes {
    id: number;
    longUrl: string;
    shortUrl: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export default URL;
