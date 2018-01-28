// This function ties our UI to our API.
// When a RECENT_RECIPES_REQUEST action is dispatched, we have a recipes saga that
// handles that, and executes this function.
// This function returns a promise. When that promise resolves, our saga can then
// dispatch RECENT_RECIPES_SUCCEEDED so that the reducer can update our state.
export const getRecentRecipes = app => {
  // this is the service we'll be querying - recipe
  // We use the name of the endpoint here - not the name of the service...?
  const recipes = app.service('recipes');

  // we find all the items at this endpoint, and return th data
  return recipes.find().then((data, err) => data.data);

  // We'll query once we've got a db and the schemas in place
  // return recipes
  //   .find({
  //     query: {$sort: {createdAt: -1}},
  //   })
  //   .then((data, err) => data.data);
};
