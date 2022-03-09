// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports =
  withPlugins([
    [optimizedImages, {
      /* config for next-optimized-images */
      optimizeImagesInDev: true,
      handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    }], 
    // Global config
    {
      images: {
        // To fix issue with file paths
        disableStaticImages: true,
      }
    }
  ]);

