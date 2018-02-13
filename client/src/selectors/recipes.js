export const getRecipesByUserId = ({items}, {user}) => {
  return items
    .filter(item => item.userId !== undefined)
    .filter(item => item.userId === user._id);
};
