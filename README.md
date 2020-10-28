# Numismatic's Catalog

Donald Scarinci's coin collection website.

### [Live Site](https://numismatics-catalog.donaldscarinci.com/)

## Build status

![Lint passing](https://camo.githubusercontent.com/df0f65b2d0e7a0448dd50abbc3b4364dc971533f/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f776f726b666c6f772f7374617475732f70726574746965722f70726574746965722f4c696e743f6c6162656c3d4c696e74267374796c653d666c61742d737175617265)
![Coverage](https://camo.githubusercontent.com/facfcb6afd684d2c9701c7d6add65f391fdf86fc/68747470733a2f2f696d672e736869656c64732e696f2f636f6465636f762f632f6769746875622f6477796c2f686170692d617574682d6a7774322e7376673f6d61784167653d32353932303030)
![Speed blazing](https://camo.githubusercontent.com/c0d653f4e211ffff68800215f80fb458e25ae6f0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f73706565642d626c617a696e672532302546302539462539342541352d627269676874677265656e2e7376673f7374796c653d666c61742d737175617265)

## Code style

![Code Style Prettier](https://camo.githubusercontent.com/687a8ae8d15f9409617d2cc5a30292a884f6813a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64655f7374796c652d70726574746965722d6666363962342e7376673f7374796c653d666c61742d737175617265)

## Tech used

**Built with**: 
  
  * [Auth0](https://auth0.com)
  * [Cloudinary](https://cloudinary.com/)
  * [Jest](https://jestjs.io/)
  * [MongoDB](https://www.mongodb.com/)
  * [Mongoose](https://mongoosejs.com/)
  * [Next.js](https://nextjs.org/)
  * [React Lazy Load Image Component](https://www.npmjs.com/package/react-lazy-load-image-component)
  * [React Multi Carousel](https://w3js.com/react-multi-carousel)
  * [React Testing Library](https://testing-library.com)
  * [Storybook](https://storybook.js.org/)
  * [SWR](https://github.com/vercel/swr)
  * [TypeScript](https://www.typescriptlang.org/)  

## Install

```
git clone https://github.com/s1100h/numismatics-catalog.git
cd numismatics-catalog
yarn install
```

## Tests

Add a new test to ```test``` directory. If you are testing a component add it to ```test/components``` or if its a page add it to ```test/pages```. and then run ```yarn test -u```

## Development

Run the install process, open this project in you favorite code editor, create a new branch, and run ```yarn dev```

## Production

To create a production copy of this application run ```yarn build```, then ``` yarn run```, and open ```http://localhost:3000``` in the browser.

### Deployment

The branch ```production``` is hooked to vercel hosting and will run build deployment tests and then copy the repository to cloud hosting. So commit any changes you want to deploy to production to the ```production``` branch.

## Adding a story

Add a new story to `stories` directory. Then run `yarn storybook`.

## Screen shots

This site is responsive to smartphones, tablets, laptops, and desktops. Here are examples of the basic layouts designed in [Adobe XD](https://www.adobe.com/products/xd.html)

**Mobile**

![home page mobile](./docs/CoinCatalog-Mobile-Homepage.png)

**Tablet & Laptop**

![home page tablet & laptop](./docs/CoinCatalog-IPad-Desktop-Homepage.png)

