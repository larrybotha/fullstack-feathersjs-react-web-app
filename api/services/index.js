const recipe = require('./recipe/recipe.service.js');
const users = require('./users/users.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(recipe);
  app.configure(users);
};
