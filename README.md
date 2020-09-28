# Numismatic's Catalog

## Description

Version two of donald's coin catalog website. This application was refactored to be purley front-end. By relying on free third-party services this application maintainance has been reduced as well as its over all cost.

**Site url**: [https://numistmatics-catalog.donaldscarinci.com](https://numistmatics-catalog.donaldscarinci.com 'https://numistmatics-catalog.donaldscarinci.com')

Third Party Sercvices Being Used:

- Image Storage CDN [Cloudinary](https://cloudinary.com 'Cloudinary')

- Coin Data & Collection Storage [MongoDB Atlas](https://www.mongodb.com/cloud/atlas 'MongoDB Atlas')

- Authentication [Auth0](https://auth0.com/ 'Auth0')

## To Do

* Write unit tests for models & pages
  * **use as example:** [https://github.com/kentcdodds/testing-react-apps/tree/main/src/__tests__/exercise](https://github.com/kentcdodds/testing-react-apps/tree/main/src/__tests__/exercise 'https://github.com/kentcdodds/testing-react-apps/tree/main/src/__tests__/exercise')
* Integrate SWR to query coin and collection for data based components
* Build out pages with all the completed components
* Add Auth0 to protect Admin page
* Write GraphQL query to get numismatics based posts from https://donaldscarinci.com
* Ship to production host
* Add a subdomain through Goddady to point to hosting
* Delete old site off of Digital Ocean

## Development

To get started, just clone and run `yarn install && yarn dev`

```
git clone https://github.com/s1100h/numismatics-site-version-two.git
yarn install
yarn dev
```

The application will be running on `http://localhost:3000`

## Building project locally

If you wanted to run this site in production, you should install modules then build the site with `npm run build ` and run it with `npm start`

## Deploying to cloud

Deploy to production hosting [Vercel.com](https://vercel.com/ 'Vercel.com') simply push changes to the `master` branch.

## Running tests

Add a new test to `_test_` directory. If you are testing a component add it to `_test_/components ` or if its a page add it to `__test_/pages`. and run `yarn test -u`

## Adding a story

Add a new story to `stories` directory. Then run `yarn storybook`.
