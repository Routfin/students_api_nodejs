import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Name must be 3 and 255 chracteres',
          },
        },
      },
      lastname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Lastname must be 3 and 255 chracteres',
          },
        },
      },

      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Invalid email',
          },
        },
      },
      yrs: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Years old must be an integer',
          },
        },
      },
      weight: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Weight  must be an integer or float',
          },
        },
      },
      height: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Height must be an integer or float',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
