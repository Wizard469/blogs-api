const { BlogPost } = require('../models');

const validateUpdate = async (req, res, next) => {
  const { user, params: { id }, body: { title, content } } = req;

  const postToUpdate = await BlogPost.findOne({ where: { id } });

  if (postToUpdate.userId !== user.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

module.exports = validateUpdate;
