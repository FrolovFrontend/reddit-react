export const API_BASE_URL = 'https://oauth.reddit.com';
export const AUTH_LINK = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&state=random_string&redirect_uri=${process.env.REACT_APP_HOST}/auth&scope=read submit identity`;
