const withPlugins = require('next-compose-plugins')
const fonts = require('next-fonts')
const optimizedImages = require('next-optimized-images')
const pwa = require('next-pwa')

module.exports = withPlugins([
  pwa({
    pwa: {
      dest: 'public',
      disable: process.env.NODE_ENV === 'development',
    },
  }),
  optimizedImages,
  fonts,
])
