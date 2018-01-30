export const RECENT_RECIPES_REQUEST = '@recipes/RECENT_RECIPES_REQUEST';
// action to initiate a request
export const requestRecentRecipes = () => ({
  type: RECENT_RECIPES_REQUEST,
});

export const RECENT_RECIPES_SUCCESS = '@recipes/RECENT_RECIPES_SUCCESS';
// when we have a success response after requesting recipes.
// This is fired inside the recipes saga on a successful response
export const recentRecipesSucceeded = () => ({
  type: RECENT_RECIPES_SUCCESS,
});

// this is the action we dispatch from the view with the data we want to create
// a new recipe with.
// This data doesn't go through to the reducer - we don't want the reducer to
// handle this yet, because then we'll have data in our store that doesn't come
// from the database.
// This is the action that our saga will subscribe to. Once our saga returns a
// response, we should dispatch a new action from that saga from that saga indicating
// success
export const ADD_RECIPE = '@recipes/ADD';
export const addRecipe = ({name, ingredients, description, imageUrl}) => ({
  type: ADD_RECIPE,
  name,
  ingredients,
  description,
  imageUrl,
});

// this is the action we can dispatch. We don't need the function, because we're not
// dispatching this from a view. We dispatch the action via our saga once our
// recipe is successfully created.
export const ADD_RECIPE_SUCCESS = '@recipes/ADD_SUCCESS';
// export const addRecipeSucess = () => ({
//   type: ADD_RECIPE_SUCCESS,
// });
