export const RECENT_RECIPES_REQUEST = '@recipes/RECENT_RECIPES_REQUEST';
// action to initiate a request
export const requestRecentRecipes = () => ({
  type: RECENT_RECIPES_REQUEST,
});

export const RECENT_RECIPES_SUCCEEDED = '@recipes/RECENT_RECIPES_SUCCEEDED';
// when we have a success response after requesting recipes.
// This is fired inside the recipes saga on a successful response
export const recentRecipesSucceeded = () => ({
  type: RECENT_RECIPES_SUCCEEDED,
});
