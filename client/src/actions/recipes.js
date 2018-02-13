export const RECENT_RECIPES_REQUEST = '@recipes/RECENT_RECIPES_REQUEST';
// action to initiate a request
export const requestRecentRecipes = () => ({
  type: RECENT_RECIPES_REQUEST,
});

// when we have a success response after requesting recipes.
// This action is dispatched inside the recipes saga on a successful response
export const RECENT_RECIPES_SUCCESS = '@recipes/RECENT_RECIPES_SUCCESS';
export const recentRecipesSuccess = recipes => ({
  type: RECENT_RECIPES_SUCCESS,
  recipes,
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

// this is the action we can dispatch.
// The function is called from within our saga when we get a response
export const ADD_RECIPE_SUCCESS = '@recipes/ADD_SUCCESS';
export const addRecipeSuccess = () => ({
  type: ADD_RECIPE_SUCCESS,
});

// we dispatch this action from the single recipe view to get the recipe from the
// server.
// Our saga is subscribed to this action, and receives the id which is passes to
// the API integration function which makes the actual request.
export const FETCH_RECIPE = '@recipes/FETCH_RECIPE';
export const fetchRecipe = id => ({
  type: FETCH_RECIPE,
  id,
});

// once the API returns successfully the saga executes the function here, allowing
// us to handle the response from the API
export const FETCH_RECIPE_SUCCESS = '@recipes/FETCH_RECIPE_SUCCESS';
export const fetchRecipeSuccess = recipe => ({
  type: FETCH_RECIPE_SUCCESS,
  recipe,
});
