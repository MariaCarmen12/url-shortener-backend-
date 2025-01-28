import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../database';

// Definimos los atributos del modelo URL
interface URLAttributes {
  id: number;
  longUrl: string;
  shortUrl: string;
}

// Algunos atributos son opcionales en `URL.build` y `URL.create`
interface URLCreationAttributes extends Optional<URLAttributes, 'id'> {}

// Extiende la clase Model de Sequelize
class URL extends Model<URLAttributes, URLCreationAttributes> implements URLAttributes {
  public id!: number;
  public longUrl!: string;
  public shortUrl!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Inicializa el modelo
URL.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  longUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  shortUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  tableName: 'urls',
  timestamps: true 
});

export default URL;