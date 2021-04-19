import { initAuth0 } from '@auth0/nextjs-auth0';

const formattedRedirectUri = process.env.AUTH0_REDIRECT_URI.toString().replace(
  /\\\//g,
  '',
);

console.log({
  REDIRECT_URI: process.env.NEXT_PUBLIC_REDIRECT_URI,
  LOGOUT: process.env.NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI
})
export default initAuth0({
  clientId: process.env.AUTH0_CLIENTID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: process.env.NEXT_PUBLIC_AUTH0_SCOPE || 'openid profile',
  domain: process.env.AUTH0_DOMAIN,
  redirectUri:
    process.env.NEXT_PUBLIC_REDIRECT_URI
    || 'http://localhost:3000/api/callback',
  postLogoutRedirectUri:
    process.env.NEXT_PUBLIC_POST_LOGOUT_REDIRECT_URI
    || 'http://localhost:3000/',
  session: {
    cookieSecret:
      'HcMty]WC^Acgy:sx6SE;p+oc*vY[@Bi.Ywo4Zn*e5^ivWR4Jr4Dqlp@S16_uq?4',
    cookieLifetime: 7200,
  },
});
