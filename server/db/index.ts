import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import BookLocationModel from './models/bookLocation';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, './database.sqlite'),
  define: {
    createdAt: "created_at",
    updatedAt: "updated_at",
    underscored: true,
  }
});

const BookLocation = BookLocationModel(sequelize, DataTypes);


sequelize.sync().then(() => {
  console.log("Database & Table Synced");
})

export { 
  BookLocation,
  sequelize 
};
