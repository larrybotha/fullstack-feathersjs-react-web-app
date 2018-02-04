export const isLoggedIn = ({accessToken}) => !!accessToken;

export const getUserEmail = ({user}) => (user ? user.email : undefined);
