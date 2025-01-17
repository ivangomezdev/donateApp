import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../lib/sequelize"

export class Product extends Model{}


Product.init(
    {
      name: {
        type: DataTypes.STRING,
      },
      precio: {
        type: DataTypes.STRING,
      },
    },
    { sequelize,
      modelName: 'Product'
     },
  );

