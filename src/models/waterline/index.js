const User = require('./user');

const loadCollections = (waterline) => {
  waterline.loadCollection(User);

  return waterline;
};

module.exports = loadCollections;
