export const getRecentRecipes = app => {
  // this is the service we'll be querying - recipe
  const recipes = app.service('recipes');

  // we perform a get request on recipes
  return recipes.find().then((data, err) => data.data);
  // return recipes
  //   .find({
  //     query: {$sort: {createdAt: -1}},
  //   })
  //   .then((data, err) => data.data);
};
