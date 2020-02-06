/* eslint-disable camel-case */
module.exports = function(sequelize, DataTypes) {
  var Instructor = sequelize.define("Instructor", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    middle_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlphanumeric: true
    },
    login_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    instructor_rating: {
      type: DataTypes.INTEGER,
      defaultValue: "0"
    }
  });

  //   Student.associate = function(models) {
  //     // We're saying that a Post should belong to an Author
  //     // A Post can't be created without an Author due to the foreign key constraint
  //     Student.belongsTo(models.studentEnrollment, {
  //       foreignKey: {
  //         allowNull: false
  //       }
  //     });
  //   };

  return Instructor;
};
