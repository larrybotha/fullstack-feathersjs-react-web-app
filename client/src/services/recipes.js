// This function ties our UI to our API.
// When a RECENT_RECIPES_REQUEST action is dispatched, we have a recipes saga that
// handles that, and executes this function.
// This function returns a promise. When that promise resolves, our saga can then
// dispatch RECENT_RECIPES_SUCCEEDED so that the reducer can update our state.
export const getRecentRecipes = app => {
  // this is the service we'll be querying - recipe
  // We use the name of the endpoint here - not the name of the service...?
  const recipes = app.service('recipes');

  // we find all the items at this endpoint, and return the data
  return (
    recipes
      // instead of returning whatever we get from the server, we can request
      // the server to sort the data before we receive it
      // Sort the data from newest to oldest
      .find({query: {$sort: {createdAt: -1}}})
      .then((data, err) => data.data)
  );
};

// this is what our addRecipe saga relies on in order to create a recipe on the
// server.
// We call this from our saga handler, passing through the details of the recipe.
export const createRecipe = (app, recipe) => {
  // first we need the service on which recipes reside
  const recipes = app.service('recipes');

  // then we can create the recipe. When this promise resolves, we dispatch
  // our ADD_RECIPE_SUCCESS from the saga. If this promise was rejected, we'd have
  // to catch the error in the saga, and dispatch an action to indicate to the UI
  // that there was an error.
  return recipes.create(recipe).then((data, err) => data);
};

// create an endpoint to fetch a single recipe by its id
export const getRecipe = (app, id) => {
  // first get the service we are using for the request
  const recipes = app.service('recipes');

  // make the request and return the promise. Our saga has a yield waiting for
  // a response.
  return recipes.get(id).then((data, err) => data);
};

