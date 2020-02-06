/* eslint-disable camel-case */
module.exports = function(sequelize, DataTypes) {
  var StudentEnrollment = sequelize.define("studentEnrollment", {
    student_credits: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    course_rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });

  // StudentEnrollment.associate = function(models) {
  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //   StudentEnrollment.hasMany(models.Student, {
  //     onDelete: "cascade"
  //   });
  // };

  return StudentEnrollment;
};
