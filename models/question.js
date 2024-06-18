module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    questionId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Question.associate = (models) => {
    Question.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };

  return Question;
};
