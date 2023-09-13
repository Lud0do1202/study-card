const api = 'https://studycardapi.com';
const assetsFolder = '/assets';
const imagesFolder = assetsFolder + '/images';

export const environment = {
  api: {
    auth: api + '/auth.php',
  },
  assets: {
    images: {
      logo: imagesFolder + '/logo.svg',
    },
  },
};
