import shortid from 'shortid';
import { Sequelize, STRING, JSON } from 'sequelize';


const BookLocation = (sequelize: Sequelize, dataTypes: { STRING: typeof STRING, JSON: typeof JSON }) => {
  return sequelize.define('locations', {
    id: {
      type: dataTypes.STRING,
      primaryKey: true,
      defaultValue: shortid.generate
    },
    title: {
      type: dataTypes.STRING,
      allowNull: false,
      defaultValue: 'Untitled',
    },
    data: {
      type: dataTypes.JSON,
      allowNull: true,
    },
    parent_id: {
      type: dataTypes.JSON,
      allowNull: true,
    }
  });
}

export default BookLocation

