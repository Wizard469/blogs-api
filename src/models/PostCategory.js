module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
    underscored: true,
    tableName: "post_categories",
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blog_posts',
      foreignKey: 'category_id',
      otherKey: 'post_id',
      through: PostCategory,
    });

    models.BlogPost.belongsToMany(models.Category, {
      as: 'Categories',
      foreignKey: 'post_id',
      otherKey: 'category_id',
      through: PostCategory,
    });
  };

  return PostCategory;
};
