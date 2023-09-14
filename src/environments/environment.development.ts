const api = 'http://localhost/HelloWorld/Lud0do1202/study-card-api';
// const api = 'https://studycardapi.com';
const assetsFolder = '/assets';
const imagesFolder = assetsFolder + '/images';

export const environment = {
  api: {
    auth: api + '/auth.php',
    topic: api + '/topic.php',
  },
  assets: {
    images: {
      logo: imagesFolder + '/logo.svg',
    },
  },
};
