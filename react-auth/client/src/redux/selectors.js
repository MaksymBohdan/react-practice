const isAuthenticated = state => state.session.isAuthenticated;
const getUser = state => state.session.user;
const getToken = state => state.session.token;

export { isAuthenticated, getUser, getToken };
