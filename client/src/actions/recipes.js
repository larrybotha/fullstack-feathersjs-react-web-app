export const RECENT_RECIPES_REQUEST = '@recipes/RECENT_RECIPES_REQUEST';
export const requestRecentRecipes = () => ({
  type: RECENT_RECIPES_REQUEST,
});

export const RECENT_RECIPES_SUCCEEDED = '@recipes/RECENT_RECIPES_SUCCEEDED';
export const recentRecipesSucceeded = () => ({
  type: RECENT_RECIPES_SUCCEEDED,
});
