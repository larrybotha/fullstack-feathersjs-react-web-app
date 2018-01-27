// Initializes the `recipe` service on path `/recipes`
const createService = require('feathers-nedb');
const createModel = require('../../models/recipe.model');
const hooks = require('./recipe.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'recipe',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/recipes', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('recipes');

  service.hooks(hooks);
};
