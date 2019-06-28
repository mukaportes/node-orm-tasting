const Waterline = require('waterline')
const loadCollections = require('../models/waterline');

const waterline = new Waterline();
loadCollections(waterline);

const initializeDB = (config) => new Promise(() => {
  waterline.initialize(config, function(error, models) {
    if (error) reject(error);

    resolve(models);
  });
});

module.exports = initializeDB;


