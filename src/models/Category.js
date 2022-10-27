module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'categories'
  });

  Category.associate = (models) => {
    Category.hasMany(models.PostCategory, {
      as: 'posts_categories',
      foreignKey: 'category_id',
    });
  };

  return Category;
};
