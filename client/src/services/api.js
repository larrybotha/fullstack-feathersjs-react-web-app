const getRecentRecipes = app => {
  const recipes = app.service('recipe');

  return recipes.get().then((data, err) => data.data);
  // return recipes
  //   .find({
  //     query: {$sort: {createdAt: -1}},
  //   })
  //   .then((data, err) => data.data);
};
