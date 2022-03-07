// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports =
  withPlugins([
    [optimizedImages, {
      optimizeImagesInDev: true,
      disableStaticImages: true,
      /* config for next-optimized-images */
      imagesFolder: 'images',
      handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    }],
    // Global config
    {
      images: {
        disableStaticImages: true,
        loader: 'akamai',
        path: ''
      }
    }
  ]);

