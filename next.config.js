const pwa = require('next-pwa');

module.exports = pwa({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
});
